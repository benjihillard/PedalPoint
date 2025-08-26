import React from 'react';
import { MapPinIcon, CalendarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Rides: React.FC = () => {
  // Mock data for demonstration
  const mockRides = [
    {
      id: 1,
      title: "Morning Coffee Ride",
      description: "Easy morning ride to the local coffee shop. Perfect for beginners!",
      date: "Tomorrow",
      time: "8:00 AM",
      location: "Golden Gate Park, San Francisco",
      distance: "15 km",
      difficulty: "Easy",
      participants: 8,
      maxParticipants: 12,
      organizer: "John Doe"
    },
    {
      id: 2,
      title: "Weekend Adventure",
      description: "Challenging ride through the hills with amazing views.",
      date: "Saturday",
      time: "9:00 AM",
      location: "Twin Peaks, San Francisco",
      distance: "45 km",
      difficulty: "Challenging",
      participants: 5,
      maxParticipants: 8,
      organizer: "Jane Smith"
    },
    {
      id: 3,
      title: "Social Evening Ride",
      description: "Casual evening ride around the city. All levels welcome.",
      date: "Friday",
      time: "6:00 PM",
      location: "Embarcadero, San Francisco",
      distance: "20 km",
      difficulty: "Easy",
      participants: 15,
      maxParticipants: 20,
      organizer: "Mike Johnson"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'challenging':
        return 'bg-orange-100 text-orange-800';
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Rides</h1>
        <p className="text-gray-600">Find your next cycling adventure</p>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              placeholder="Search rides..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500 focus:border-transparent"
            />
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500">
            <option value="">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="challenging">Challenging</option>
            <option value="expert">Expert</option>
          </select>
          <button className="bg-cycling-600 text-white px-4 py-2 rounded-md hover:bg-cycling-700 transition-colors">
            Create Ride
          </button>
        </div>
      </div>

      {/* Rides Grid */}
      <div className="grid gap-6">
        {mockRides.map((ride) => (
          <div key={ride.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{ride.title}</h3>
                <p className="text-gray-600 mb-3">{ride.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(ride.difficulty)}`}>
                {ride.difficulty}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <CalendarIcon className="w-5 h-5" />
                <span>{ride.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ClockIcon className="w-5 h-5" />
                <span>{ride.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="w-5 h-5" />
                <span>{ride.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <UserGroupIcon className="w-5 h-5" />
                <span>{ride.participants}/{ride.maxParticipants} participants</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Organized by <span className="font-medium text-gray-700">{ride.organizer}</span>
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-cycling-600 text-cycling-600 rounded-md hover:bg-cycling-50 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-cycling-600 text-white rounded-md hover:bg-cycling-700 transition-colors">
                  Join Ride
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rides; 