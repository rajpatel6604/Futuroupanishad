// components/GoogleTranslate/GoogleTranslate.jsx
"use client";
import { useEffect, useState, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";

const waitForSelector = (selector, timeout = 8000) =>
  new Promise((resolve) => {
    const interval = 200;
    let elapsed = 0;
    const t = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(t);
        return resolve(el);
      }
      elapsed += interval;
      if (elapsed >= timeout) {
        clearInterval(t);
        return resolve(null);
      }
    }, interval);
  });

export default function GoogleTranslate({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    // Clean up any existing Google Translate elements
    const cleanupExistingElements = () => {
      // Remove Google Translate banners and other UI elements
      const banners = document.querySelectorAll('.goog-te-banner-frame, .skiptranslate');
      banners.forEach(banner => {
        if (banner.parentNode) {
          banner.parentNode.removeChild(banner);
        }
      });
      
      // Remove Google Translate tooltips
      const tooltips = document.querySelectorAll('.goog-tooltip');
      tooltips.forEach(tooltip => {
        if (tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
        }
      });
      
      // Remove any injected style elements
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.innerHTML.includes('goog-te-banner-frame') || 
            style.innerHTML.includes('google translate')) {
          if (style.parentNode) {
            style.parentNode.removeChild(style);
          }
        }
      });
      
      // Fix body top position if it was modified
      if (document.body.style.top) {
        document.body.style.top = '';
      }
    };

    // Ensure callback exists BEFORE the external script runs
    window.googleTranslateElementInit = () => {
      try {
        cleanupExistingElements();
        
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,gu",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        
        // Add CSS to hide all Google Translate UI elements
        const style = document.createElement('style');
        style.innerHTML = `
          .goog-te-banner-frame, .goog-te-ftab-frame, .skiptranslate, 
          .goog-te-menu-value span, .goog-te-menu-frame, 
          .goog-tooltip, .goog-tooltip:hover {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            z-index: -1000 !important;
          }
          body {
            top: 0 !important;
            position: static !important;
          }
          .goog-text-highlight {
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }
          #google_translate_element {
            display: none !important;
          }
        `;
        document.head.appendChild(style);
        
        // Additional cleanup after a short delay
        setTimeout(cleanupExistingElements, 1000);
      } catch (e) {
        console.warn("translate init error:", e);
      }
    };

    // Add the Google Translate script once
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element"]')) {
      const s = document.createElement("script");
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // If script already exists, try to initialize
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }

    // If user previously selected language, try to pick it up from cookie
    try {
      const m = document.cookie.match(/googtrans=([^;]+)/);
      if (m && m[1]) {
        const langCode = m[1].split('/').pop();
        setCurrentLanguage(langCode);
      }
    } catch (e) {
      console.warn("Error reading language cookie:", e);
    }

    // Set up interval to continuously clean up Google Translate UI
    const cleanupInterval = setInterval(cleanupExistingElements, 2000);

    return () => {
      mountedRef.current = false;
      clearInterval(cleanupInterval);
    };
  }, []);

  // Try to click/select language in iframe menu
  const clickIframeAndSelect = (langName) =>
    new Promise((resolve) => {
      // attempt to open the menu first (if possible)
      const gadget = document.querySelector(".goog-te-gadget");
      if (gadget && typeof gadget.click === "function") gadget.click();

      setTimeout(() => {
        const iframe = document.querySelector("iframe.goog-te-menu-frame");
        if (!iframe) return resolve(false);
        try {
          const innerDoc = iframe.contentDocument || iframe.contentWindow.document;

          // look for menu items
          const items = innerDoc.querySelectorAll(".goog-te-menu2-item");
          for (let item of items) {
            const txt = (item.innerText || item.textContent || "").trim().toLowerCase();
            if (txt.includes(langName.toLowerCase())) {
              item.click();
              return resolve(true);
            }
          }

          // fallback: search spans
          const spans = innerDoc.querySelectorAll("span");
          for (let s of spans) {
            if (s.innerText && s.innerText.trim().toLowerCase().includes(langName.toLowerCase())) {
              s.click();
              return resolve(true);
            }
          }
        } catch (err) {
          console.warn("iframe access error:", err);
        }
        resolve(false);
      }, 500);
    });

  // Last fallback — set googtrans cookie and reload (works reliably in many cases)
  const setCookieAndReload = (code) => {
    try {
      const host = location.hostname;
      document.cookie = `googtrans=/en/${code};path=/;max-age=3600`;
      if (host.split(".").length > 1) {
        const root = "." + host.split(".").slice(-2).join(".");
        document.cookie = `googtrans=/en/${code};path=/;domain=${root};max-age=3600`;
      }
      // tiny delay so cookie is written
      setTimeout(() => location.reload(), 300);
    } catch (e) {
      console.warn("cookie fallback failed", e);
    }
  };

  const changeLanguage = async (lang) => {
    setCurrentLanguage(lang.code);
    setIsOpen(false);

    // 1) try the standard hidden select (.goog-te-combo)
    let combo = document.querySelector(".goog-te-combo");
    if (!combo) combo = await waitForSelector(".goog-te-combo", 5000);
    if (combo) {
      combo.value = lang.code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    // 2) try the iframe approach
    const clicked = await clickIframeAndSelect(lang.name);
    if (clicked) return;

    // 3) cookie + reload fallback
    setCookieAndReload(lang.code);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
  ];

  const currentLang = languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <>
      {/* hidden container used by google script */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-black bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Globe className="w-4 h-4 text-gray-700" />
          <span className="hidden sm:inline">{currentLang.flag}</span>
          <span className="hidden md:inline">{currentLang.name}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm text-left hover:bg-gray-100 transition ${
                  currentLanguage === lang.code ? "bg-gray-50 font-semibold text-blue-800" : "text-gray-700"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
                {currentLanguage === lang.code && <span className="ml-auto w-2 h-2 rounded-full bg-blue-800" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}