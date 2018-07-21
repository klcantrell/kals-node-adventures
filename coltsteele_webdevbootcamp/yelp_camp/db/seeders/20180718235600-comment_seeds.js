export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        text: 'This place is great!',
        campground_id: 1,
        user_id: 3,
      },
      {
        text: 'Why no internets?',
        campground_id: 2,
        user_id: 2,
      },
      {
        text: 'I miss my dog',
        campground_id: 3,
        user_id: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
