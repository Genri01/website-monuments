
import React from 'react';
import { setAddres, setCity, setRegion, setIndex } from '../../redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux'; 
import { cart } from '../../redux/selectors';
import './style.css';

export default function LocationForm(props) {
  const { mobile } = props;

  const dispatch = useDispatch(); 
  const addres_city = useSelector(cart.addres_city);
  const addres = useSelector(cart.addres);
  const addres_index = useSelector(cart.addres_index);
  const addres_region = useSelector(cart.addres_region);

  return (
    <div className="locationFormWrapper">
      <div className='titleLocationContainer'>
        <div className='titlelocation textTitleForm'>Адрес доставки (Установки)</div>
      </div>
      <div className='locationContainer' style={{  borderTop: '1px solid #ea402f'}}>
        <div className='locationForm'>
        <div style={{width:'50px'}}>Регион</div><select value={addres_region} onChange={(e) => {dispatch(setRegion(e.target.value))}} className="locationInput" name="shipping_address[zone_id]" id="shipping_address_zone_id" data-theme="bootstrap" data-onchange="reloadAll">
                  <option value=""> --- Выбрать --- </option>
                  <option value="Алтайский край">Алтайский край</option>
                  <option value="Амурская область">Амурская область</option>
                  <option value="Архангельская область">Архангельская область</option>
                  <option value="Астраханская область">Астраханская область</option>
                  <option value="Белгородская область">Белгородская область</option>
                  <option value="Брянская область">Брянская область</option>
                  <option value="Владимирская область">Владимирская область</option>
                  <option value="Волгоградская область">Волгоградская область</option>
                  <option value="Вологодская область">Вологодская область</option>
                  <option value="Воронежская область">Воронежская область</option>
                  <option value="Еврейская АО">Еврейская АО</option>
                  <option value="Забайкальский край">Забайкальский край</option>
                  <option value="Ивановская область">Ивановская область</option>
                  <option value="Иркутская область">Иркутская область</option>
                  <option value="Калининградская область">Калининградская область</option>
                  <option value="Калужская область">Калужская область</option>
                  <option value="Камчатский край">Камчатский край</option>
                  <option value="Карачаево-Черкеcсия">Карачаево-Черкеcсия</option>
                  <option value="Кемеровская область">Кемеровская область</option>
                  <option value="Кировская область">Кировская область</option>
                  <option value="Костромская область">Костромская область</option>
                  <option value="Краснодарский край">Краснодарский край</option>
                  <option value="Красноярский край">Красноярский край</option>
                  <option value="Курганская область">Курганская область</option>
                  <option value="Курская область">Курская область</option>
                  <option value="Ленинградская область">Ленинградская область</option>
                  <option value="Липецкая область">Липецкая область</option>
                  <option value="Магаданская область">Магаданская область</option>
                  <option value="Москва">Москва</option>
                  <option value="Московская область">Московская область</option>
                  <option value="Мурманская область">Мурманская область</option>
                  <option value="Ненецкий АО">Ненецкий АО</option>
                  <option value="Нижегородская область">Нижегородская область</option>
                  <option value="Новгородская область">Новгородская область</option>
                  <option value="Новосибирская область">Новосибирская область</option>
                  <option value="Омская область">Омская область</option>
                  <option value="Оренбургская область">Оренбургская область</option>
                  <option value="Орловская область">Орловская область</option>
                  <option value="Пензенская область">Пензенская область</option>
                  <option value="Пермский край">Пермский край</option>
                  <option value="Приморский край">Приморский край</option>
                  <option value="Псковская область">Псковская область</option>
                  <option value="Республика Адыгея">Республика Адыгея</option>
                  <option value="Республика Алтай">Республика Алтай</option>
                  <option value="Республика Башкортостан">Республика Башкортостан</option>
                  <option value="Республика Бурятия">Республика Бурятия</option>
                  <option value="Республика Дагестан">Республика Дагестан</option>
                  <option value="Республика Ингушетия">Республика Ингушетия</option>
                  <option value="Республика Кабардино-Балкария">Республика Кабардино-Балкария</option>
                  <option value="Республика Калмыкия">Республика Калмыкия</option>
                  <option value="Республика Карелия">Республика Карелия</option>
                  <option value="Республика Коми">Республика Коми</option>
                  <option value="Республика Марий Эл">Республика Марий Эл</option>
                  <option value="Республика Мордовия">Республика Мордовия</option>
                  <option value="Республика Саха">Республика Саха</option>
                  <option value="Республика Северная Осетия">Республика Северная Осетия</option>
                  <option value="Республика Татарстан">Республика Татарстан</option>
                  <option value="Республика Тыва">Республика Тыва</option>
                  <option value="Республика Хакасия">Республика Хакасия</option>
                  <option value="Ростовская область">Ростовская область</option>
                  <option value="Рязанская область">Рязанская область</option>
                  <option value="Самарская область">Самарская область</option>
                  <option value="Санкт-Петербург">Санкт-Петербург</option>
                  <option value="Саратовская область">Саратовская область</option>
                  <option value="Сахалинская область">Сахалинская область</option>
                  <option value="Свердловская область">Свердловская область</option>
                  <option value="Смоленская область">Смоленская область</option>
                  <option value="Ставропольский край">Ставропольский край</option>
                  <option value="Тамбовская область">Тамбовская область</option>
                  <option value="Тверская область">Тверская область</option>
                  <option value="Томская область">Томская область</option>
                  <option value="Тульская область">Тульская область</option>
                  <option value="Тюменская область">Тюменская область</option>
                  <option value="Удмуртская Республика">Удмуртская Республика</option>
                  <option value="Ульяновская область">Ульяновская область</option>
                  <option value="Хабаровский край">Хабаровский край</option>
                  <option value="Ханты-Мансийский АО - Югра">Ханты-Мансийский АО - Югра</option>
                  <option value="Челябинская область">Челябинская область</option>
                  <option value="Чеченская Республика">Чеченская Республика</option>
                  <option value="Чувашская Республика">Чувашская Республика</option>
                  <option value="Чукотский АО">Чукотский АО</option>
                  <option value="Ямало-Ненецкий АО">Ямало-Ненецкий АО</option>
                  <option value="Ярославская область">Ярославская область</option>
              </select>
        </div> 
      </div>
        <div className='locationContainer'>
        <div className='locationForm'>
        <div style={{width:'50px'}}>Город</div><input value={addres_city} onChange={(e) => { dispatch(setCity(e.target.value)) }} className='locationInput' id="city" name="city" />
        </div>
        </div>
        <div className='locationContainer'>
        <div className='locationForm'>
        <div style={{width:'50px'}}>Адрес</div><input value={addres} onChange={(e) => { dispatch(setAddres(e.target.value)) }}  className='locationInput' id="add" name="add" />
        </div>
        </div>
        <div className='locationContainer'>
          <div className='locationForm'>
          <div style={{width:'50px'}}>Индекс</div><input value={addres_index} onChange={(e) => { dispatch(setIndex(e.target.value)) }} type='number'  className='locationInput' id="ind" name="ind" />
          </div>
        </div>
    </div>
  );
}
