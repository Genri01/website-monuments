import React from 'react';
import Answer from '../../components/Answer';
import Title from '../Title';
import './style.css';

const answers = [
  {
    answer: "Что выбрать гранит или мрамор?",
    description:`Мрамор
    Это осадочная горная порода из карбоната кальция и магния. Мрамор имеет рисунок в виде разводов и прожилок. Чаще встречается светлый мрамор, но благодаря примесям, входящим в состав камня, он может быть разных оттенков от желтого до черного.
    Мрамор обладает большей пластичностью, благодаря чему его поверхность лучше поддаётся механической обработке – резке и полировке. Из-за высокой плотности мрамор практически не поглощает влагу, что придаёт ему высокую морозостойкость и устойчивость к ударам, растрескиванию.
    Гранит
    Это вулканическая горная порода, образующаяся в результате остывания и окаменения магмы. Гранит имеет зернистый рисунок цветом от розового до зеленого и даже черного.
    Однако плотность гранита более чем в два раза превышает таковую
    у мрамора. Так, средний срок службы мрамора на открытом воздухе
    в условиях нашего климата 110-160 лет, а срок службы гранита — 500-600 лет
    Делая выбор между гранитом и мрамором для изготовления памятника, учитывайте
    Разницу в прочности Это два очень прочных материала, но гранит более долговечен
    Свой вкус Какой рисунок и оттенок вам придется по душе
    Свой бюджет
    Гранит сложнее добывать
    и тяжелее поддается обработке, поэтому стоит он дороже. Мрамор же доступен по цене практически любой семье.
    `
  },
  {
    answer: "Как сделать заказ?",
    description:`Заявка
    Вы оставляете заявку : — заполнив любую форму на сайте, — по телефону, — или в одном из офисов продаж.
    Договор
    После согласования всех деталей с менеджером мы составляем
    и подписываем договор
    Изготовление
    Стандартный памятник изготавливаем от 3 до 14 дней. Мемориальный комплекс — от 1 месяца
    Установка
    Доставляем
    и устанавливаем памятник на могилу в удобное
    для вас время. Подробнее
    Оплата
    Вы оплачиваете стоимость памятника
    и всех работ нашему сотруднику на месте после установки
    3.  доставка
     Мы доставим и установим памятник на могилу в любую точку Краснодарского края и Республики Адыгея.
    ► Мы доставим и установим памятник по согласованию
    в удобное для вас время.
    ► За 15 лет работы мы доставили и установили памятники
    в городах: Абинск, Анапа, Геленжик, Апширонск, Белореченск, Ейск, Гулькевичи, Коренвск, Крымск, Курганинск, Лабинск, Майкоп, Новокубанск, Приморско-Ахтарск, Сочи, Темрюк, Тихорецк, Тимошевск, Туапсе, Усть-Лабинск, в станицах
    и селах: Выселковская, Белая глина, Динская, Брюховецкая, Каневская, Абрау-Дюрсо, Новомышавтовская, Лазоревская, Кущевская и во многих других городах и населенных пунктах нашего края и республики.
    ► Если потребуется (например, для установки мемориальных комплексов), мы выезжаем несколько раз.
    `
  },
  {
    answer: "Как оплатить?",
    description:"Наличными в офисе, безналичным СбербанкОнлайн"
  }
]

function AnswerBlock(props) {
  const { header, mobile } = props;
  let st = {fontSize: '10px'}
    return (
      <div id="answer" className={`${mobile ? 'mobileAnswerBlock_container' : "answerblock_container"}`}>
        {
          mobile ? 
          <>
            <Title size={28} margin="20px 0px 30px 0px" text="Вoпросы ответы" under />
            {/* <div className="answerblock_container_header">{header}</div> */}
            {
              answers.map((el,id) => ( 
              <Answer mobile={mobile} style={st} title={el.answer} description={el.description} key={id} />
              ))
            }
          </>
          :
          <>
            <Title margin="50px 0px 30px 0px" text="Вoпросы отвевты" under />
            <div className="answerblock_container_header">{header}</div>
            {
              answers.map((el,id) => ( 
              <Answer mobile={mobile} style={st} title={el.answer} description={el.description} key={id} />
              ))
            }
          </>
        }
      </div>
    );
}

export default AnswerBlock;
