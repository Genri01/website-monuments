const sendmail = require('sendmail')();

 const UserController = {
  sendConsult:(req,res) => {
    const { body } = req.body 
    const { byer_consult_initial,byer_consult_tel, coment_consult } = body 
    if(byer_consult_tel !== '' && byer_consult_initial !== '') {
      sendmail({
        from: `webdev170291@yandex.ru`,
        // from: `${email}`,
        to: 'webdev170291@yandex.ru',
        subject: `!! Запрос на обратную связь !!`,
        html: `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона: ${byer_consult_tel.bold()}. Прислал сообщение с текстом: " ${coment_consult.bold()} "`,
      }, function(err, reply) {
        res.status(200).send({msg: "Ожидайте в ближайшее время с вами свяжутся наши специалисты"}) 
      })
    } else {
      res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
    } 
  }
}

module.exports = UserController;