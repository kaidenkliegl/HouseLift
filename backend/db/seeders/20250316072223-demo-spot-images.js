'use strict';
const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      // Spot 1 Images
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 2 Images
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 3 Images
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    await queryInterface.bulkDelete(options, null, {});
  }
};
