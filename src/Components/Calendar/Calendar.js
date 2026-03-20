"use client";

import { useState, useEffect } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(0);

  const dateWiseImages = [
  { id: 1, date: "1st", image: "/images/calendar/1.jpg", alt: "April 1 - Hospital Entrance" },
  { id: 2, date: "2nd", image: "/images/calendar/2.jpg", alt: "April 2 - Medical Staff" },
  { id: 3, date: "3rd", image: "/images/calendar/3.jpg", alt: "April 3 - Patient Care" },
  { id: 4, date: "4th", image: "/images/calendar/4.jpg", alt: "April 4 - Operation Theater" },
  { id: 5, date: "5th", image: "/images/calendar/5.jpg", alt: "April 5 - Laboratory" },
  { id: 6, date: "6th", image: "/images/calendar/6.jpg", alt: "April 6 - Pharmacy" },
  { id: 7, date: "7th", image: "/images/calendar/7.jpg", alt: "April 7 - Waiting Area" },
  { id: 8, date: "8th", image: "/images/calendar/8.jpg", alt: "April 8 - Emergency Ward" },
  { id: 9, date: "9th", image: "/images/calendar/9.jpg", alt: "April 9 - ICU" },
  { id: 10, date: "10th", image: "/images/calendar/10.jpg", alt: "April 10 - Pediatric Ward" },
  { id: 11, date: "11th", image: "/images/calendar/11.jpg", alt: "April 11 - Maternity Ward" },
  { id: 12, date: "12th", image: "/images/calendar/12.jpg", alt: "April 12 - OPD" },
  { id: 13, date: "13th", image: "/images/calendar/13.jpg", alt: "April 13 - Dental Clinic" },
  { id: 14, date: "14th", image: "/images/calendar/14.jpg", alt: "April 14 - Eye Care" },
  { id: 15, date: "15th", image: "/images/calendar/15.jpg", alt: "April 15 - Physiotherapy" },
  { id: 16, date: "16th", image: "/images/calendar/16.jpg", alt: "April 16 - X-Ray Room" },
  { id: 17, date: "17th", image: "/images/calendar/17.jpg", alt: "April 17 - Sonography" },
  { id: 18, date: "18th", image: "/images/calendar/18.jpg", alt: "April 18 - Pharmacy" },
  { id: 19, date: "19th", image: "/images/calendar/19.jpg", alt: "April 19 - Cafeteria" },
  { id: 20, date: "20th", image: "/images/calendar/20.jpg", alt: "April 20 - Prayer Room" },
  { id: 21, date: "21st", image: "/images/calendar/21.jpg", alt: "April 21 - Garden Area" },
  { id: 22, date: "22nd", image: "/images/calendar/22.jpg", alt: "April 22 - Administration" },
  { id: 23, date: "23rd", image: "/images/calendar/23.jpg", alt: "April 23 - Conference Room" },
  { id: 24, date: "24th", image: "/images/calendar/24.jpg", alt: "April 24 - Library" },
  { id: 25, date: "25th", image: "/images/calendar/25.jpg", alt: "April 25 - Founder's Photo" },
  { id: 26, date: "26th", image: "/images/calendar/26.jpg", alt: "April 26 - Award Ceremony" },
  { id: 27, date: "27th", image: "/images/calendar/27.jpg", alt: "April 27 - Community Event" },
  { id: 28, date: "28th", image: "/images/calendar/28.jpg", alt: "April 28 - Health Camp" },
  { id: 29, date: "29th", image: "/images/calendar/29.jpg", alt: "April 29 - Training Session" },
  { id: 30, date: "30th", image: "/images/calendar/30.jpg", alt: "April 30 - New Equipment" },
  { id: 31, date: "31st", image: "/images/calendar/31.jpg", alt: "May 1 - Special Event" },
];
  useEffect(() => {
    const dayOfMonth = new Date().getDate();
    setCurrentDay(dayOfMonth);

    const interval = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentDay(new Date().getDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const currentImage =
    dateWiseImages.find((img) => img.id === currentDay) || dateWiseImages[0];

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-3">
         Image of the Day
        </h2>
        <p className="text-center text-gray-600 text-lg mb-8">
          {currentDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Image Card */}
          <div className="relative max-w-max mx-auto p-4 bg-white rounded-lg overflow-hidden shadow-lg ">
            <img
              src={currentImage.image}
              alt={currentImage.alt}
              className="w-full max-w-[600px] h-full object-contain transition-transform duration-500 hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">

              <span className="inline-block mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow">
                📅 Day {currentDay}
              </span>
            </div>
          </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          A new memory every day ✨
        </p>
      </div>
    </div>
  );
}
