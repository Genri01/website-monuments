import React from 'react';
import './style.css'; 
import Footer from '../../components/Footer' 
import Title from '../../components/Title'; 
import { works_images } from '../../config';

function WorkScreen(props) {

  const { mobile } = props; 
    return (
      <div className="main_screen" > 
        <div className='catalog_wrapper'>
          {
            mobile ?
            <>
            <Title id='works' margin="110px 0px 0px 0px" size={33} text="Наши работы" under/>
              <div className="mobileCardMonumentContainer">
              {
                works_images.map((item, i) => (<img key={i} src={item}  className='worksImageMobile'  id={item.id} alt={`work_${i}`} />))
              } 
              </div> 
            </>
            :
            <>
              <Title id='works' margin="50px 0px 30px 0px" size={38} text="Наши работы" under/>
              <div className="cardMonumentContainer">
              {
                works_images.map((item, i) => (<img className='worksImage' key={i} src={item}  id={item.id} alt={`work_${i}`} />))
              } 
              </div> 
            </>
          }
        </div>
        <Footer mobile={mobile} />  
      </div>
    );
}

export default WorkScreen;
