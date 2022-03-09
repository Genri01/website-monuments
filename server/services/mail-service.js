const sendmail = require('sendmail')();
const ApiErr = require('../exeptions/api-error');
const DB = require('./db_service');

class MailService {
  async sendAcnivationMail(to , link) {

      sendmail({
        from: `aspektpak@yandex.ru`,
        to: `${to}`,
        subject: `Запрос на активацию аккаунта <Monumentum.ru>`,
        html:`<div> Для активайии аккаунта пройдите по ссылке <a href=${link}>${link}</a></div>`,
      },async err => {
        console.log(err)
        if(err != null) {
          let errStr = '';
          let code = '';
          switch (err.message.split(" ")[0]) {
            case "SMTP":
              console.log('SMTP');
              errStr = err.message.split(" ");
              code = +errStr[1]
              
              break;
            case "queryMx":
              console.log('queryMx: неверный домен')
              break;
            default:
              break;
          }
  
          const user = await DB.searchInTables('users',{ email: to });
          const tokens = await DB.searchInTables('tokens',{ userId: user.getDataValue('id') });
          await tokens.destroy();
          await user.destroy();
          await DB.resetIncrementTables();
        }
      })
  }
}

module.exports = new MailService();
