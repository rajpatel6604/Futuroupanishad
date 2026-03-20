"use client";

import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 5,
      src: "/images/gallery/image2.webp",
      alt: "Medical Team",
      category: "Staff",
    },

    {
      id: 6,
      src: "/images/gallery/image6.webp",
      alt: "Awards Ceremony",
      category: "Recognition",
    },
    {
      id: 9,
      src: "/images/gallery/image9.webp",
      alt: "Patient Recovery",
      category: "Services",
    },
    {
      id: 10,
      src: "/images/gallery/image10.webp",
      alt: "Surgical Equipment",
      category: "Technology",
    },
    {
      id: 16,
      src: "/images/gallery/image23.jpg",
      alt: "Hospital Event",
      category: "Community",
    },
    {
      id: 12,
      src: "/images/gallery/image13.webp",
      alt: "Hospital Event",
      category: "Community",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="md:text-4xl font-semibold text-center text-gray-800 mb-4">
          Hospital Highlights
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          A glimpse into our healthcare facilities, dedicated staff, and the
          services we provide. With advanced medical equipment and compassionate
          care, we strive to serve every patient with dignity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <div className="flex items-center justify-center h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="group-hover:scale-105 object-cover transition-all duration-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-1 hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View More
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
