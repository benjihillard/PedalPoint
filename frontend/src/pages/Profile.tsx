import React from 'react';
import { UserIcon, CogIcon, HeartIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    username: "john_cyclist",
    cyclingLevel: "Intermediate",
    preferredStyles: ["Road", "Gravel"],
    location: "San Francisco, CA",
    bio: "Passionate cyclist who loves exploring new routes and meeting fellow riders.",
    joinDate: "January 2024",
    totalRides: 24,
    upcomingRides: 3
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-cycling-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-12 h-12 text-cycling-600" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-3">@{user.username}</p>
            <p className="text-gray-700 mb-4">{user.bio}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cycling-100 text-cycling-800 rounded-full text-sm font-medium">
                {user.cyclingLevel}
              </span>
              {user.preferredStyles.map((style) => (
                <span key={style} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  {style}
                </span>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 border border-cycling-600 text-cycling-600 rounded-md hover:bg-cycling-50 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <HeartIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{user.totalRides}</div>
          <div className="text-gray-600">Total Rides</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <CalendarIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{user.upcomingRides}</div>
          <div className="text-gray-600">Upcoming Rides</div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <UserIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">Member since</div>
          <div className="text-gray-600">{user.joinDate}</div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <CogIcon className="w-5 h-5 mr-2" />
          Profile Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={user.name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={user.email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={user.username}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input
              type="text"
              value={user.location}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              value={user.bio}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cycling-500"
            />
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2 bg-cycling-600 text-white rounded-md hover:bg-cycling-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
            <div className="w-2 h-2 bg-cycling-500 rounded-full"></div>
            <span className="text-gray-700">Joined "Morning Coffee Ride" on March 15</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
            <div className="w-2 h-2 bg-cycling-500 rounded-full"></div>
            <span className="text-gray-700">Completed "Weekend Adventure" on March 10</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md">
            <div className="w-2 h-2 bg-cycling-500 rounded-full"></div>
            <span className="text-gray-700">Created "Social Evening Ride" on March 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 