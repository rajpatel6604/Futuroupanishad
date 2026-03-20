"use client";
import Link from "next/link";
import React, { useState } from "react";
import ApiService from "../../Services/ApiService";
import ApiPath from "../../Services/ApiPath";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      // POST to /contacts (ApiPath.contact)
      await ApiService({
        method: "POST",
        endpoint: ApiPath.contact,
        data: formData,
      });

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success('Message sent successfully!');
    } catch (err) {
      console.error("Contact API error:", err);
      setErrorMessage(
        err?.message || (err && err.error) || "Failed to send message. Please try again."
      );
      toast.error(err?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto py-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Info Panel */}
            <div className="md:pb-[100px]">
              <div className="pb-4 space-y-4">
                <div className="text-sm md:text-lg text-primary-2 uppercase">
                  For any queries
                </div>
                <h1 className="text-3xl md:text-6xl">Get into touch</h1>
              </div>
              <div className="space-y-4 mt-2 md:mt-8">
                <div className="flex items-center border-b border-gray-200 md:max-w-[80%] py-4 gap-4">
                  <img
                    className="h-10 w-10"
                    src="/images/contact/manage.png"
                  />
                  <div>
                    <div className="text-gray-500">Managed By</div>
                    <div className="md:text-lg">
                      Vneviks Skill Tech Pvt. Ltd.
                    </div>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-200 md:max-w-[80%] py-4 gap-4">
                  <img className="h-10 w-10" src="/images/contact/phone.png" />
                  <div>
                    <div className="text-gray-500">Feel free to contact us</div>
                    <Link className="md:text-lg" href="tel:+919429277139">
                      +91 9429277139
                    </Link>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-200 md:max-w-[80%] py-4 gap-4">
                  <img className="h-10 w-10" src="/images/contact/mail.png" />
                  <div>
                    <div className="text-gray-500">How can we help you?</div>
                    <Link
                      className="md:text-lg"
                      href="mailto:vneviksskilltech@gmail.com"
                    >
                      vneviksskilltech@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center md:max-w-[80%] py-4 gap-4">
                  <img
                    className="h-10 w-10 min-w-10"
                    src="/images/contact/location.png"
                  />
                  <div>
                    <div className="text-gray-500">Reach to us</div>
                    <Link
                      className="md:text-lg"
                      href="https://maps.app.goo.gl/22Nn1zmeJhPVHG4JA"
                    >
                      801-802, Skywalk The Element, SG Hwy, Gota, Ahmedabad, Gujarat 382470
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="bg-primary-1 text-white">
              <div className="p-5 md:p-12 md:pt-24">
                <h2 className="md:text-4xl">Send us a message</h2>
                <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                  <input
                    className="h-[50px] focus:border-primary-2 py-2 px-4 focus:outline-none w-full border"
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="h-[50px] focus:border-primary-2 py-2 px-4 focus:outline-none w-full border"
                    type="email"
                    name="email"
                    placeholder="Your email address*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="h-[50px] focus:border-primary-2 py-2 px-4 focus:outline-none w-full border"
                    type="tel"
                    name="phone"
                    placeholder="Your phone*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    className="h-[100px] focus:border-primary-2 py-2 px-4 focus:outline-none w-full border"
                    name="message"
                    placeholder="Your Message*"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="submit"
                    className="uppercase bg-primary-2 w-full py-4 disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 md:-mt-[90px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.5394393965607!2d72.53957597514346!3d23.113949679109854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x23f41a76fece619%3A0x717fd9022fa2e42c!2sVneviks%20Skill%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1774014957413!5m2!1sen!2sin"
            height="500"
            width={"100%"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
