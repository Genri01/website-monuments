const sendmail = require('sendmail')();

 const UserController = {
  sendConsult:(req,res) => {
    const { body } = req.body 
    const { byer_consult_initial,byer_consult_tel, coment_consult } = body 
    if(byer_consult_tel !== '' && byer_consult_initial !== '') {
      sendmail({
        // from: `webdev170291@yandex.ru`,
        from: `infoimperial01@gmail.com`,
        // from: `${email}`,
        // to:`webdev170291@yandex.ru`,
        to: `infoimperial01@gmail.com`,
        subject: `!! Запрос на обратную связь !!`,
        html: `Пользователь ${byer_consult_initial.bold()} запрашивает обратную связь по номеру телефона: ${byer_consult_tel.bold()}. Прислал сообщение с текстом: " ${coment_consult.bold()} "`,
      }, function(err, reply) {
        res.status(200).send({msg: "Ожидайте в ближайшее время с вами свяжутся наши специалисты"}) 
      })
    } else {
      res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
    } 
  },
  sendInfo:(req,res) => {
    const { body } = req.body;

    const {     
      byer_initial_dead, 
      byer_date_birthday, 
      byer_date_dead,
      byer_file,
      install,
      byer_initial,
      byer_tel,
      coment, 
      byer_email,
      addres_city,
      addres,
      addres_index,
      addres_region,
      delivery_method,
      pay_method, 
      buy, 
      width,
      material,
      fileName
    } = body 
 
    let infobuy = 'Заказали памятники: '

    buy.map((item) => {
      infobuy += `
        \n\n\n
        Название: ${item.title},
        Количество: ${item.count},
        ID памятника: ${item.id},
        Цена: ${item.price},
        \n\n\n 
      `
    })
 
    let method_delivery = ''

    switch (delivery_method) {
      case 'transit':
        method_delivery = 'Доставка транспортной кампанией (оплачивается заказчиком)'
        break;
      case 'transitandinstall':
        method_delivery = 'Доставка и установка'
        break;
      case 'maycop':
        method_delivery = 'Cамовывоз с производства г. Майкоп Промышленная 54а'
        break;
      case 'anapa':
        method_delivery = 'Cамовывоз с производства г. Анапа Чехова 50а'
        break;
    
      default:
        break;
    }

    if(true) {
      sendmail({
        // from: `webdev170291@yandex.ru`,
        from: `infoimperial01@gmail.com`,
        // from: `${email}`,
        // to:`webdev170291@yandex.ru`,
        to: `infoimperial01@gmail.com`,
        subject: `!! Информация о заказе !!`,
        html: `
        Покупатель ${byer_initial.bold()} с номером телефона: ${byer_tel.bold()} и email(почтой): ${byer_email.bold()} 
        заказал для умершего ${byer_initial_dead.bold()} ${install ? ' с Установкой' : ' без Установки'}.
        Дата рождения умершего: ${byer_date_birthday.bold()} , Дата смерти умершего: ${byer_date_dead.bold()},
        \n\n\n
        ${infobuy}
        \n\n\n
        Комментарии к заказу:  " ${coment.bold()} ".
        Регион доставки: ${addres_region.bold()}
        Город доставки: ${addres_city.bold()}
        Адрес доставки: ${addres.bold()}
        Индекс: ${addres_index.bold()} 
        Способ оплаты: ${pay_method === "nal" ? ' Наличными' : ' Безналичным расчётом'}
        Способ доставки: ${method_delivery},
        Параметры ПЛИТ: ${width},
        Материал ПЛИТ: ${material},
      `,
      attachments: [
        {   // data uri as an attachment
          path: `files/${fileName}`
        }
      ]
      }, function(err, reply) {
        res.status(200).send({msg: "Заказ успешно принят. Ожидайте в ближайшее время с вами свяжутся наши специалисты"}) 
      })
    } else {
      res.status(200).send({msg: "Проверьте правильность заполненых данных :("})
    } 
  }
}

module.exports = UserController;