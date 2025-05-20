'use strict';
const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      // Spot 1 Images (already provided)
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

      // Spot 2 Images (already provided)
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

      // Spot 3 Images (already provided)
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

      // Spot 4 Images
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 5 Images
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/259984/pexels-photo-259984.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 6 Images
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/259953/pexels-photo-259953.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/276471/pexels-photo-276471.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 7 Images
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/264706/pexels-photo-264706.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: 'https://images.pexels.com/photos/277519/pexels-photo-277519.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Spot 8 Images
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/259863/pexels-photo-259863.jpeg',
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/276578/pexels-photo-276578.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg',
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: 'https://images.pexels.com/photos/276673/pexels-photo-276673.jpeg',
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
