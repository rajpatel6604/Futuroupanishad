'use client'

import { useEffect, useRef } from 'react'

export default function Awards() {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // Auto-scroll functionality
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let autoScrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' })
      }
    }, 3000)

    return () => clearInterval(autoScrollInterval)
  }, [])

  // Sample award images - replace with your actual award images
  const awards = [
    { id: 1, image: "/images/award/award1.jpg", alt: "Healthcare Excellence Award 2023" },
    { id: 2, image: "/images/award/award2.jpg", alt: "Community Service Medal 2022" },
    { id: 3, image: "/images/award/award3.jpg", alt: "Best Rural Hospital 2021" },
    { id: 4, image: "/images/award/award4.jpg", alt: "Patient Care Excellence 2020" },
    { id: 5, image: "/images/award/award1.jpg", alt: "Medical Innovation Award 2019" },
    { id: 6, image: "/images/award/award2.jpg", alt: "Humanitarian Service 2018" },
    { id: 7, image: "/images/award/award3.jpg", alt: "Quality Healthcare Award 2017" },
    { id: 8, image: "/images/award/award4.jpg", alt: "Excellence in Service 2016" },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Awards & Recognition</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our commitment to excellence in healthcare has been recognized through these prestigious awards
        </p>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {awards.map((award) => (
              <div key={award.id} className="flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    
                    {/* Replace with actual image: */}
                    <img src={award.image} alt={award.alt} className="object-cover w-48 h-48  rounded-lg" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fade effects on sides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>

      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}