"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const SocialInitiatives = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "/images/social/img2.jpg",
      alt: "Water Tank Construction - Madhasana, Tal. Modasa, Dist. Aravalli",
      category: "Staff",
      title: "Water Tank Construction - Madhasana, Tal. Modasa, Dist. Aravalli",
    },
    {
      id: 2,
      src: "/images/social/img3.jpg",
      alt: "VishwaShanti Mahayagna, Mehsana",
      category: "Services",
      title: "VishwaShanti Mahayagna, Mehsana (29/11/1984)",
    },
    {
      id: 4,
      src: "/images/social/img6.jpg",
      alt: "Animal Water Tank",
      category: "Recognition",
      title: "Animal Water Tank",
    },
    {
      id: 6,
      src: "/images/social/img9.jpg",
      alt: "Pujya Matrushree Rukhibaa - Sadguru shreemad Jeshingbapa",
      category: "Services",
      title: "Pujya Matrushree Rukhibaa - Sadguru shreemad Jeshingbapa",
    },
    {
      id: 7,
      src: "/images/social/img10.jpg",
      alt: "SJB Hospital - Inauguration Ceremony",
      category: "Technology",
      title: "SJB Hospital - Inauguration Ceremony",
    },
    {
      id: 8,
      src: "/images/social/img13.jpg",
      alt: "Vishv Sant Samelan",
      category: "Community",
      title: "Vishv Sant Samelan",
    },
    {
      id: 13,
      src: "/images/social/img19.webp",
      alt: "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
      category: "Recognition",
      title:
        "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
    },
    {
      id: 14,
      src: "/images/social/img20.webp",
      alt: "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
      category: "Recognition",
      title:
        "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
    },
    {
      id: 15,
      src: "/images/social/img23.webp",
      alt: "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
      category: "Recognition",
      title:
        "New Homes for the Homeless people by Shrimad Jeshingbapa Seva Team",
    },
    {
      id: 16,
      src: "/images/social/img21.webp",
      alt: "Pankhi Ghar at Godmaji",
      category: "Recognition",
      title: "Pankhi Ghar at Godmaji",
    },
    {
      id: 17,
      src: "/images/social/img22.webp",
      alt: "Pankhi Ghar at Tintoi",
      category: "Recognition",
      title: "Pankhi Ghar at Tintoi",
    },
     {
      id: 18,
      src: "/images/social/dog.jpg",
      alt: "Daily seva feeding dogs with love and care",
      category: "Recognition",
      title: "Daily seva feeding dogs with love and care",
    },
     {
      id: 19,
      src: "/images/social/monkey.jpg",
      alt: "Daily seva feeding  monkeys with love and care",
      category: "Recognition",
      title: "Daily seva feeding monkeys with love and care",
    },
     {
      id: 20,
      src: "/images/social/fish.jpg",
      alt: "Fish feeding seva",
      category: "Recognition",
      title: "Fish feeding seva",
    },

  ];

  const youtubeVideos = [
    {
      id: 1,
      videoId: "Ex4bvWx3gx0", 
    },
    {
      id: 2,
      videoId: "AigGgaDdjME", 
    },
    {
      id: 3,
      videoId: "T6BLUx8JKMc", 
    },
  ];

  const handleVideoPlay = (videoId) => {
    setPlayingVideo(videoId);
  };

  const handleVideoClose = () => {
    setPlayingVideo(null);
  };

  // Function to get YouTube thumbnail URL (max resolution)
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Gallery Section */}
        <h2 className="md:text-4xl font-semibold text-center text-gray-800 mb-4">
          Community Impact
        </h2>
        <p className="text-center text-gray-600 mb-10 mx-auto leading-relaxed">
          Shrimad Jeshingbapa's followers carry out various animal welfare
          activities where building nestbox (bird's shelter) and Water
          tanks/troughs for animal to drink waters, 1900 water troughs(hawada)
          has been built across Rajasthan and Gujarat states. it has become
          routine now to feed dogs, moneys and fishes daily.
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
                    onClick={() =>
                      setSelectedImage({ src: image.src, title: image.title })
                    }
                  />

                  {/* Overlay Text */}
                  <div className="container absolute bottom-0 left-0 bg-black opacity-70">
                    <p className="text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl rounded-lg cursor-pointer bg-black"
                onClick={() => handleVideoPlay(video.videoId)}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  {/* YouTube Thumbnail */}
                  <img
                    src={getYouTubeThumbnail(video.videoId)}
                    alt="YouTube Video"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-400"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30">
                    <div className="bg-red-600 rounded-full p-3 transform transition-all duration-300 scale-110 opacity-0 opacity-100">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal for Images */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors md:-top-10 md:-right-10 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={selectedImage.src}
                alt="Enlarged"
                width={1200}
                height={800}
                className="max-h-[80vh] w-full object-contain rounded-lg"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-4 px-6 rounded-b-lg">
                <p className="text-center text-gray-200 mx-auto leading-relaxed text-lg">
                  {selectedImage.title}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {playingVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleVideoClose}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={handleVideoClose}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800 rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="relative bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&controls=1&showinfo=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-96 lg:h-[500px]"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialInitiatives;
