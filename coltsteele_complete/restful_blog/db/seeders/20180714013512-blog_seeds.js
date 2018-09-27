module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Blogs', [
        {
          title: 'On Clouds',
          image: 'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee03083f5cccfa61a0d3194c34d3b70e&auto=format&fit=crop&w=1950&q=80',
          body: 'These are my thoughts on clouds.',
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};
