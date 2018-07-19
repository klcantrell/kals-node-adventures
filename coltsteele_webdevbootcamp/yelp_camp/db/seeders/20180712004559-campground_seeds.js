export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campgrounds', [
      {
        name: 'Salmon Creek',
        image: 'salmon-creek.jpg',
        description: 'Good old fishy fun',
      },
      {
        name: 'Granite Hill',
        image: 'granite-hill.jpg',
        description: 'Get ready for a rocky good time',
      },
      {
        name: 'Mountain Goat\'s Rest',
        image: 'mountain-goats-rest.jpg',
        description: 'Have a goat time!',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campgrounds', null, {});
  }
};
