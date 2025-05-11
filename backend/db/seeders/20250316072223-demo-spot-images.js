'use strict';
const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 1,
        url: "https://example.com/image2.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 2,
        url: "https://example.com/image3.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 3,
        url: "https://example.com/image5.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: "https://images.pexels.com/photos/1591157/pexels-photo-1591157.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 4,
        url: "https://example.com/image6.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: "https://images.pexels.com/photos/1586742/pexels-photo-1586742.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 5,
        url: "https://example.com/image7.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: "https://images.pexels.com/photos/1586742/pexels-photo-1586742.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 6,
        url: "https://example.com/image8.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: "https://images.pexels.com/photos/1570923/pexels-photo-1570923.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 7,
        url: "https://example.com/image9.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: "https://images.pexels.com/photos/1295278/pexels-photo-1295278.jpeg?auto=compress&cs=tinysrgb&w=600",
        preview: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spotId: 8,
        url: "https://example.com/image10.jpg",
        preview: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SpotImages", null, {});
  }
};
