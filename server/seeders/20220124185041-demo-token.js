module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tokens', [{
      userId: '1',
      refreshToken: 'svrfdagrmklna4ka$G5kean4g',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tokens', null, {});
  }
};