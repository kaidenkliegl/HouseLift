'use strict';
const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
options.tableName = 'Spots';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '123 Sunset Blvd',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        lat: 34.052235,
        lng: -118.243683,
        name: 'Outskirt house living',
        description: 'A cozy loft in the heart of outskirts LA.',
        price: 150.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        address: '456 Ocean Ave',
        city: 'Miami',
        state: 'FL',
        country: 'USA',
        lat: 25.761681,
        lng: -80.191788,
        name: 'Beachfront Bungalow',
        description: 'Steps away from the beach with an amazing view.',
        price: 200.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        address: '789 Mountain View Rd',
        city: 'Denver',
        state: 'CO',
        country: 'USA',
        lat: 39.739236,
        lng: -104.990251,
        name: 'Mountain Retreat',
        description: 'Relax in the mountains with fresh air and wildlife.',
        price: 175.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        address: '12 Liberty St',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        lat: 40.712776,
        lng: -74.005974,
        name: 'Manhattan Studio',
        description: 'Chic studio in the financial district.',
        price: 250.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 5,
        address: '88 Rainier Ave',
        city: 'Seattle',
        state: 'WA',
        country: 'USA',
        lat: 47.606209,
        lng: -122.332069,
        name: 'Urban Jungle Apartment',
        description: 'Modern living in the Emerald City.',
        price: 130.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 6,
        address: '77 Bourbon St',
        city: 'New Orleans',
        state: 'LA',
        country: 'USA',
        lat: 29.951065,
        lng: -90.071533,
        name: 'French Quarter Hideaway',
        description: 'Experience the vibrant culture of NOLA.',
        price: 160.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 7,
        address: '123 Desert Rose Ln',
        city: 'Phoenix',
        state: 'AZ',
        country: 'USA',
        lat: 33.448376,
        lng: -112.074036,
        name: 'Desert Escape',
        description: 'Tranquil home with stunning sunsets.',
        price: 120.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 8,
        address: '456 Bay Bridge Rd',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 37.774929,
        lng: -122.419418,
        name: 'Golden Gate Flat',
        description: 'Walk to the pier, dine in the best SF spots.',
        price: 220.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  }
};
