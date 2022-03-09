module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      activationLink: 'Joasvtre4qwrvcasCDShn',
      password: '123',
      email: 'webdev170291@yandex.ru',
      isActivated:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};