"use client";

import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const galleryImages = [
    // {
    //   id: 1,
    //   src: "/images/gallery/hospital_high1.webp",
    //   alt: "Hospital Facility",
    //   category: "Infrastructure",
    // },
    // {
    //   id: 2,
    //   src: "/images/gallery/hospital_high3.webp",
    //   alt: "Medical Team",
    //   category: "Staff",
    // },
    // {
    //   id: 3,
    //   src: "/images/gallery/hospital_high4.webp",
    //   alt: "Patient Care",
    //   category: "Services",
    // },
    // {
    //   id: 4,
    //   src: "/images/gallery/hospital_high5.webp",
    //   alt: "Advanced Equipment",
    //   category: "Technology",
    // },
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
    // {
    //   id: 7,
    //   src: "/images/gallery/image7.webp",
    //   alt: "Hospital Campus",
    //   category: "Infrastructure",
    // },
    // {
    //   id: 8,
    //   src: "/images/gallery/image8.webp",
    //   alt: "Doctor Consultation",
    //   category: "Staff",
    // },
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
      id: 11,
      src: "/images/gallery/image11.webp",
      alt: "Health Awareness Camp",
      category: "Programs",
    },

    {
      id: 12,
      src: "/images/gallery/image13.webp",
      alt: "Hospital Event",
      category: "Community",
    },
    // {
    //   id: 13,
    //   src: "/images/gallery/image18.webp",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    {
      id: 14,
      src: "/images/gallery/image19.webp",
      alt: "Hospital Event",
      category: "Community",
    },
    {
      id: 15,
      src: "/images/gallery/image20.jpg",
      alt: "Hospital Event",
      category: "Community",
    },
    {
      id: 16,
      src: "/images/gallery/image21.jpg",
      alt: "Hospital Event",
      category: "Community",
    },
    {
      id: 17,
      src: "/images/gallery/image22.jpg",
      alt: "Hospital Event",
      category: "Community",
    },
    // {
    //   id: 18,
    //   src: "/images/gallery/image23.jpg",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    // {
    //   id: 19,
    //   src: "/images/gallery/image24.jpg",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    // {
    //   id: 20,
    //   src: "/images/gallery/image25.webp",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    // {
    //   id: 21,
    //   src: "/images/gallery/image26.webp",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    // {
    //   id: 22,
    //   src: "/images/gallery/image27.webp",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    // {
    //   id: 23,
    //   src: "/images/gallery/image28.webp",
    //   alt: "Hospital Event",
    //   category: "Community",
    // },
    {
      id: 24,
      src: "/images/gallery/image1.webp",
      alt: "Hospital Facility",
      category: "Infrastructure",
    },
     {
      id: 25,
      src: "/images/gallery/image5.webp",
      alt: "Community Outreach",
      category: "Programs",
    },
    {
      id: 26,
      src: "/images/gallery/image3.webp",
      alt: "Patient Care",
      category: "Services",
    },
    // {
    //   id: 27,
    //   src: "/images/gallery/image4.webp",
    //   alt: "Advanced Equipment",
    //   category: "Technology",
    // },
  ];
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Hospital Highlights", href: "#" },
  ];
  return (
    <main>
      <Breadcrumb
        items={breadcrumbItems}
        title={"Hospital Highlights"}
        bgImage="/images/gallery/image11.webp"
      />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </section>
    </main>
  );
}
