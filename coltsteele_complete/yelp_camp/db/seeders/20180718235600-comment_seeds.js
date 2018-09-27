export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        text: 'This place is great!',
        campgroundId: 1,
        userId: 3,
      },
      {
        text: 'Why no internets?',
        campgroundId: 2,
        userId: 2,
      },
      {
        text: 'I miss my dog',
        campgroundId: 3,
        userId: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
