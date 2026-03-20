"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Users,
  Star,
} from "lucide-react";

export default function EventRow({ event }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Open for Registration":
      case "Open to All":
        return "bg-green-100 text-green-800 border-green-200";
      case "Limited Seats":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      className={`relative transition-all duration-300 ${
        isExpanded
          ? "bg-gradient-to-r from-orange-50 to-amber-50"
          : "hover:bg-orange-50"
      } ${event.featured ? "border-l-4 border-l-primary-1" : ""}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className="p-6 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-800 text-lg">
                  {event.startDate} - {event.endDate}
                </span>
                {event.featured && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                )}
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Clock className="w-4 h-4" />
                <span>{event.days}</span>
              </div>
              {event.place && (
                <div className="flex items-center gap-2 text-primary-2 font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{event.place}</span>
                </div>
              )}
            </div>
          </div>

          <div
            className={`inline-flex items-center px-3 py-1 text-xs font-medium border ${getStatusColor(
              event.status
            )} w-fit`}
          >
            {event.status}
          </div>

          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 w-fit">
            {event.type}
          </div>
        </div>

        {/* Right column */}
        <div className="p-6 flex flex-col justify-center gap-3 border-l border-gray-200">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-primary-2 text-lg mb-1 leading-tight">
                {event.title}
              </h3>
              {event.subTitle && (
                <p className="text-gray-600 text-sm mb-2">{event.subTitle}</p>
              )}
              {event.capacity && (
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Users className="w-4 h-4" />
                  <span>{event.capacity}</span>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-orange-100 transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-orange-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-orange-700" />
              )}
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <button className="px-4 py-2 bg-primary-1 text-white hover:bg-primary-2 transition-colors text-sm font-medium">
              {event.status === "In Progress" ? "View Details" : "Register"}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-orange-200 bg-gradient-to-r from-orange-25 to-amber-25">
          <div className="pt-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              Event Description
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {event.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
