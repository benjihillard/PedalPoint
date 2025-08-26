import React from 'react';
import { Link } from 'react-router-dom';
import { MapIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Pedal Point
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and organize group rides in your neighborhood
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/rides"
            className="bg-cycling-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cycling-700 transition-colors"
          >
            Find Rides
          </Link>
          <Link
            to="/profile"
            className="border border-cycling-600 text-cycling-600 px-6 py-3 rounded-lg font-medium hover:bg-cycling-50 transition-colors"
          >
            Join Community
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover Rides</h3>
          <p className="text-gray-600">
            Find group rides near you, from casual coffee rides to challenging hill climbs.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserGroupIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Community</h3>
          <p className="text-gray-600">
            Connect with local cyclists and build lasting friendships on the road.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-cycling-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CalendarIcon className="w-6 h-6 text-cycling-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Organize Rides</h3>
          <p className="text-gray-600">
            Plan and host your own group rides for the cycling community.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center p-8 bg-cycling-50 rounded-lg border border-cycling-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to start riding?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of cyclists who are already discovering amazing rides and building community.
        </p>
        <Link
          to="/rides"
          className="inline-block bg-cycling-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-cycling-700 transition-colors"
        >
          Explore Rides Now
        </Link>
      </div>
    </div>
  );
};

export default Home; 