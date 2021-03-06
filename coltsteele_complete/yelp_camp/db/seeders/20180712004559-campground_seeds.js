export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Campgrounds', [
      {
        name: 'Salmon Creek',
        image: 'salmon-creek.jpg',
        description: 'Good old fishy fun. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tenetur sequi sed. Corporis sapiente quibusdam cumque distinctio delectus beatae? Eos necessitatibus culpa eveniet ab explicabo nostrum nam itaque fugiat ut.',
        price: '9',
        userId: 1,
        imageId: 'admin',
      },
      {
        name: 'Granite Hill',
        image: 'granite-hill.jpg',
        description: 'Get ready for a rocky good time. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tenetur sequi sed. Corporis sapiente quibusdam cumque distinctio delectus beatae? Eos necessitatibus culpa eveniet ab explicabo nostrum nam itaque fugiat ut.',
        price: '20',
        userId: 1,
        imageId: 'admin',
      },
      {
        name: 'Mountain Goat\'s Rest',
        image: 'mountain-goats-rest.jpg',
        description: 'Have a goat time! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tenetur sequi sed. Corporis sapiente quibusdam cumque distinctio delectus beatae? Eos necessitatibus culpa eveniet ab explicabo nostrum nam itaque fugiat ut.',
        price: '15',
        userId: 1,
        imageId: 'admin',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Campgrounds', null, {});
  }
};