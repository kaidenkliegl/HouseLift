"use strict";
const { SpotImage } = require("../models");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate(
      [
        // Spot 1 Images (already provided)
        {
          spotId: 1,
          url: "https://images.pexels.com/photos/31353860/pexels-photo-31353860.jpeg",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 1,
          url: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 1,
          url: "https://images.pexels.com/photos/3288104/pexels-photo-3288104.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 1,
          url: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 1,
          url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 2 Images (already provided)
        {
          spotId: 2,
          url: "https://images.pexels.com/photos/3665354/pexels-photo-3665354.jpeg",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: "https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: "https://media.istockphoto.com/id/1256932607/photo/luxurious-villa-interior-with-swimming-pool-at-summer-daylight-scene.jpg?b=1&s=612x612&w=0&k=20&c=teG_QI0jm2H3KRLpnIWIGPLgXk4eZ6Ujyh1AavpFeks=",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: "https://images.pexels.com/photos/6758740/pexels-photo-6758740.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 2,
          url: "https://images.pexels.com/photos/6758776/pexels-photo-6758776.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 3 Images (already provided)
        {
          spotId: 3,
          url: "https://images.pexels.com/photos/32150698/pexels-photo-32150698/free-photo-of-charming-rural-house-in-lush-countryside.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: "https://images.pexels.com/photos/7163609/pexels-photo-7163609.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: "https://images.pexels.com/photos/5810797/pexels-photo-5810797.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 3,
          url: "https://images.pexels.com/photos/730389/pexels-photo-730389.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 4 Images

        {
          spotId: 4,
          url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800", // New NY apartment preview
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          url: "https://images.pexels.com/photos/7055787/pexels-photo-7055787.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          url: "https://images.pexels.com/photos/4468988/pexels-photo-4468988.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          url: "https://images.pexels.com/photos/6284229/pexels-photo-6284229.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 4,
          url: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 5 Images
        {
          spotId: 5,
          url: "https://images.pexels.com/photos/19127461/pexels-photo-19127461/free-photo-of-halloween-decoration-in-front-of-a-house.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          url: "https://images.pexels.com/photos/6186818/pexels-photo-6186818.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          url: "https://images.pexels.com/photos/259984/pexels-photo-259984.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          url: "https://images.pexels.com/photos/6782279/pexels-photo-6782279.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 5,
          url: "https://images.pexels.com/photos/6585748/pexels-photo-6585748.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 6 Images
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/3773570/pexels-photo-3773570.png?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 6,
          url: "https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 7 Images
        {
          spotId: 7,
          url: "https://images.pexels.com/photos/12626052/pexels-photo-12626052.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          url: "https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          url: "https://images.pexels.com/photos/11757072/pexels-photo-11757072.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          url: "https://images.pexels.com/photos/5900808/pexels-photo-5900808.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 7,
          url: "https://images.pexels.com/photos/16171620/pexels-photo-16171620/free-photo-of-grand-canyon-west.jpeg?auto=compress&cs=tinysrgb&w=800",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Spot 8 Images
        {
          spotId: 8,
          url: "https://images.pexels.com/photos/259863/pexels-photo-259863.jpeg",
          preview: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 8,
          url: "https://images.pexels.com/photos/276578/pexels-photo-276578.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 8,
          url: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 8,
          url: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          spotId: 8,
          url: "https://images.pexels.com/photos/276673/pexels-photo-276673.jpeg",
          preview: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      options
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    await queryInterface.bulkDelete(options, null, {});
  },
};
