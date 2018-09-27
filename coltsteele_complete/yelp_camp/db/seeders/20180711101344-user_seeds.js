import bcrypt from 'bcrypt';

export default {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          username: 'cloudstrife',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null),
        },
        {
          username: 'kalcantrell',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null),
        },
        {
          username: 'squallleonhart',
          password: bcrypt.hashSync('admin', bcrypt.genSaltSync(8), null),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
