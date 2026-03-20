"use client";
import { Calendar, MapPin, Users, Utensils } from "lucide-react";

export const EventCard = ({event}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-4 border-primary-2 h-full flex flex-col">
      {/* Header */}
      <div className="bg-primary-1 p-6 text-white">
        <h3 className="text-xl md:text-2xl text-center font-bold">
          {event.title}
        </h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-left">
        {/* Event Details */}
        <div className="space-y-4 mb-6">
          {/* Date */}
          <div className="flex items-start gap-3">
            <Calendar className="text-primary-2 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                When
              </p>
              <p className="text-sm text-gray-800">
                {event.date}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="text-primary-2 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Where
              </p>
              <p className="text-sm text-gray-800">
                {event.location}
              </p>
            </div>
          </div>

          {/* Attendance */}
          <div className="flex items-start gap-3">
            <Users className="text-primary-2 flex-shrink-0 mt-1" size={20} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Participation
              </p>
              <p className="text-sm text-gray-800">
                {event.attendance}
              </p>
            </div>
          </div>

        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed flex-grow">
          {event.description}
        </p>

      </div>
    </div>
  );
};
