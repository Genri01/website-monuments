
import React from 'react';
import ProductItem from '../ProductItem';
import images from '../../assets/images';
import './style.css';

class LocationForm extends React.Component {

    render(){
      return (
        <div className="locationFormWrapper">
          <div className='titleLocationContainer'>
            <div className='titlelocation textTitleForm'>Адрес доставки</div>
          </div>
          <div className='locationContainer' style={{  borderTop: '1px solid #ea402f'}}>
            <div className='locationForm'>
            <div style={{width:'50px'}}>Регион</div><select class="locationInput" name="shipping_address[zone_id]" id="shipping_address_zone_id" data-theme="bootstrap" data-onchange="reloadAll">
                      <option value=""> --- Выбрать --- </option>
                      <option value="2726">Алтайский край</option>
                      <option value="2729">Амурская область</option>
                      <option value="2724">Архангельская область</option>
                      <option value="2725">Астраханская область</option>
                      <option value="2727">Белгородская область</option>
                      <option value="2730">Брянская область</option>
                      <option value="2799">Владимирская область</option>
                      <option value="2801">Волгоградская область</option>
                      <option value="2802">Вологодская область</option>
                      <option value="2803">Воронежская область</option>
                      <option value="2728">Еврейская АО</option>
                      <option value="2734">Забайкальский край</option>
                      <option value="2741">Ивановская область</option>
                      <option value="2740">Иркутская область</option>
                      <option value="2743">Калининградская область</option>
                      <option value="2744">Калужская область</option>
                      <option value="2775">Камчатский край</option>
                      <option value="2733">Карачаево-Черкеcсия</option>
                      <option value="2747">Кемеровская область</option>
                      <option value="2804">Кировская область</option>
                      <option value="2750">Костромская область</option>
                      <option value="2751" selected="selected">Краснодарский край</option>
                      <option value="2752">Красноярский край</option>
                      <option value="2754">Курганская область</option>
                      <option value="2755">Курская область</option>
                      <option value="2735">Ленинградская область</option>
                      <option value="2757">Липецкая область</option>
                      <option value="2758">Магаданская область</option>
                      <option value="2761">Москва</option>
                      <option value="2722">Московская область</option>
                      <option value="2762">Мурманская область</option>
                      <option value="2764">Ненецкий АО</option>
                      <option value="2766">Нижегородская область</option>
                      <option value="2767">Новгородская область</option>
                      <option value="2768">Новосибирская область</option>
                      <option value="2769">Омская область</option>
                      <option value="2771">Оренбургская область</option>
                      <option value="2770">Орловская область</option>
                      <option value="2773">Пензенская область</option>
                      <option value="2774">Пермский край</option>
                      <option value="2800">Приморский край</option>
                      <option value="2777">Псковская область</option>
                      <option value="2760">Республика Адыгея</option>
                      <option value="2738">Республика Алтай</option>
                      <option value="2794">Республика Башкортостан</option>
                      <option value="2796">Республика Бурятия</option>
                      <option value="2759">Республика Дагестан</option>
                      <option value="2765">Республика Ингушетия</option>
                      <option value="2763">Республика Кабардино-Балкария</option>
                      <option value="2736">Республика Калмыкия</option>
                      <option value="2776">Республика Карелия</option>
                      <option value="2787">Республика Коми</option>
                      <option value="2808">Республика Марий Эл</option>
                      <option value="2782">Республика Мордовия</option>
                      <option value="2805">Республика Саха</option>
                      <option value="2798">Республика Северная Осетия</option>
                      <option value="2746">Республика Татарстан</option>
                      <option value="2756">Республика Тыва</option>
                      <option value="2721">Республика Хакасия</option>
                      <option value="2778">Ростовская область</option>
                      <option value="2779">Рязанская область</option>
                      <option value="2781">Самарская область</option>
                      <option value="2785">Санкт-Петербург</option>
                      <option value="2783">Саратовская область</option>
                      <option value="2737">Сахалинская область</option>
                      <option value="2807">Свердловская область</option>
                      <option value="2784">Смоленская область</option>
                      <option value="2786">Ставропольский край</option>
                      <option value="2788">Тамбовская область</option>
                      <option value="2792">Тверская область</option>
                      <option value="2789">Томская область</option>
                      <option value="2790">Тульская область</option>
                      <option value="2793">Тюменская область</option>
                      <option value="2742">Удмуртская Республика</option>
                      <option value="2795">Ульяновская область</option>
                      <option value="2748">Хабаровский край</option>
                      <option value="2749">Ханты-Мансийский АО - Югра</option>
                      <option value="2732">Челябинская область</option>
                      <option value="2739">Чеченская Республика</option>
                      <option value="2731">Чувашская Республика</option>
                      <option value="2723">Чукотский АО</option>
                      <option value="2780">Ямало-Ненецкий АО</option>
                      <option value="2806">Ярославская область</option>
                  </select>
            </div>
          </div>
            <div className='locationContainer'>
            <div className='locationForm'>
            <div style={{width:'50px'}}>Город</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
            </div>
            </div>
            <div className='locationContainer'>
            <div className='locationForm'>
            <div style={{width:'50px'}}>Адрес</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
            </div>
            </div>
            <div className='locationContainer'>
              <div className='locationForm'>
              <div style={{width:'50px'}}>Индекс</div><input className='locationInput' step="1" min="1" max="27" id="count_product" name="count_product" />
              </div>
            </div>
        </div>
      );
    }
}

export default LocationForm;