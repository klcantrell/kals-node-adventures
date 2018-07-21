export default {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          name: 'Cloud Strife',
        },
        {
          name: 'Kal Cantrell',
        },
        {
          name: 'Squall Leonhart',
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
