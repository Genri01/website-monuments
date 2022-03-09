const db = require('../models');

const Usermodel  = require('../models/users');
const Users = Usermodel(db.sequelize,db.Sequelize);

const Tokensmodel  = require('../models/tokens');
const Tokens = Tokensmodel(db.sequelize,db.Sequelize);

const ApiErr = require('../exeptions/api-error');

class DB {
  async addInTables(table,obj) {
      switch (table) {
        case 'users':
          const user = await Users.create(obj);
          if (!user) {
            throw ApiErr.BadRequest(e.message)
          }
          return user;
  
        case 'tokens':

          const token = await Tokens.create(obj);
          if (!token) {
            throw ApiErr.BadRequest(e.message)
          }
          return token;
      
        default:
          break;
      }
  }
  
  async removeInTables() {

  }

  async searchInTables(table,key) {
    switch (table) {
      case 'users':
        const user = await Users.findOne({ where: key });
        return user;

      case 'tokens':
        const token = await Tokens.findOne({ where: key });
        return token;
    
      default:
        break;
    }

  }
  async updateModelTables(model,obj) {
    const m = await model.update(obj);
    return m;
  }

  async resetIncrementTables() {
    const query = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    const query1 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;");
    const query2 = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 1;");
    const query3 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 1;");
    const query4 = await db.sequelize.query("ALTER TABLE Users AUTO_INCREMENT = 0;");
    const query5 = await db.sequelize.query("ALTER TABLE Tokens AUTO_INCREMENT = 0;");
  }

}

module.exports = new DB();