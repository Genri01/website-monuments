import React from 'react'; 
import Title from '../Title';
import './style.css';
import { about_product } from '../../config';


export default function AboutProduct(props) { 
  const { mobile, id } = props;
  return (
    <div  id={id} className={`${mobile ? 'mobileAboutWrapper' : "aboutWrapper"}`}>
      {
        mobile ?
        <>
          <Title size={20} margin="10px 0px 50px 0px" text="О нас и нашем производстве" />
          <div className='mobileAboutTopWrapper'>
            <div className='aboutPhotoWrapper'>
              <img className='photoAbout' src={about_product.img} alt="photo" />
            </div>
            <div className='aboutTextWrapper'>
              {
                about_product.text
              }
            </div>
          </div>
          <div className='mobileAboutBottomWrapper'>
            <div className='aboutPhotoWrapper'>
              <img className='photoAbout' src={about_product.img_2} alt="photo" />
            </div>
            <div className='aboutTextWrapper'>
              {
                about_product.text_2
              }
            </div>
          </div>
        </> :
        <>
          <Title margin="10px 0px 50px 0px" text="О нас и нашем производстве" />
          <div className='aboutTopWrapper'>
          <div className='aboutPhotoWrapper'>
            <img className='photoAbout' src={about_product.img} alt="photo" />
          </div>
          <div className='aboutTextWrapper'>
            {
              about_product.text
            }
          </div>
          </div>
          <div className='aboutBottomWrapper'>
          <div className='aboutTextWrapper'>
            {
              about_product.text_2
            }
          </div>
          <div className='aboutPhotoWrapper'>
            <img className='photoAbout' src={about_product.img_2} alt="photo" />
          </div>
          </div>
        </>
      }
    </div>
  );
}
 