import React from 'react';
import images from '../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';

class ViewStone extends React.Component {
  constructor(props) {  
    super(props)
    this.state = {
        items: 0,
        active: 0,
        direction: ''
    }
  }

  componentDidMount() {
  }
  
  moveLeft() {
    this.mySwiper.slidePrev();
  }
  
  moveRight() {
    this.mySwiper.slideNext()
  }

  render() {
    const { slide, type, dark, number,id, prod } = this.props;
    const { active } = this.state;
    const {
      view_1,
      view_2,
      view_3,
      view_4,
      view_5,
      view_6,
      view_7,
      view_8,
      view_9,
      view_10,
      arrowr,
      arrowl,
    } = images;
    const sliderWalk = [
      {
        img: view_1,
      },
      {
        img: view_2,
      },
      {
        img: view_3,
      },
      {
        img: view_4,
      },
      {
        img: view_5,
      },
      {
        img: view_6,
      },
      {
        img: view_7,
      },
      {
        img: view_8,
      },
      {
        img: view_9,
      },
      {
        img: view_10,
      },
  ]

    return (
      <div className="viewStoneWrapper">
        <div className='wrapperArrow'>
          <img src={arrowl} alt="s"  width={40} height={40}/>
        </div>
        <div className='swiper_container'>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            // autoHeight={true}
            // effect={"coverflow"}
            // grabCursor={true}
            // centeredSlides={true}
            // coverflowEffect={{
            //   rotate: 5,
            //   stretch: 0,
            //   depth: 300,
            //   modifier: 3,
            //   slideShadows: false,
            // }}
          >
            { 
              sliderWalk.map((el,id)=>(
              <SwiperSlide key={id}>
                <div className="slider_container_all">
                  <img src={el.img} alt="a" width={'100%'} height={'100%'} />
                </div>
              </SwiperSlide>
              ))
            }  
          </Swiper>
        </div>
        <div className='wrapperArrow'>
          <img src={arrowr} alt="s" width={40} height={40} />
        </div>
      </div>
    );
  }
}

export default ViewStone;