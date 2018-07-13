module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campgrounds', [
      {name: 'Salmon Creek', image: 'salmon-creek.jpg', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Granite Hill', image: 'granite-hill.jpg', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Mountain Goat\'s Rest', image: 'mountain-goats-rest.jpg', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campgrounds', null, {});
  }
};
