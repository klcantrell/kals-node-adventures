export default {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          username: 'cloudstrife',
          password: 'admin'
        },
        {
          username: 'kalcantrell',
          password: 'admin'
        },
        {
          username: 'squallleonhart',
          password: 'admin'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
