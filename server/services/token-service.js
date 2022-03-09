const jwt = require('jsonwebtoken');
const keys = require('../config/default.json');
const DB = require('./db_service');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, keys.Server.KEYS.JWT_SECRET_KEY_ACCESS,{expiresIn: '30m'})
    const refreshToken = jwt.sign(payload, keys.Server.KEYS.JWT_SECRET_KEY_REFRESH,{expiresIn: '30d'})
    return {
      accessToken,
      refreshToken
    }
  } 

  async saveToken(userId,refreshToken) {
    const user = await DB.searchInTables('tokens',{ userId });
    user ? await DB.updateModelTables('tokens',{ refreshToken }) : await DB.addInTables('tokens',{ userId, refreshToken });
  }
}

module.exports = new TokenService();