module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campgrounds', [
      {
        name: 'Salmon Creek',
        image: 'salmon-creek.jpg',
        description: 'Good old fishy fun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Granite Hill',
        image: 'granite-hill.jpg',
        description: 'Get ready for a rocky good time',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mountain Goat\'s Rest',
        image: 'mountain-goats-rest.jpg',
        description: 'Have a goat time!',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campgrounds', null, {});
  }
};
