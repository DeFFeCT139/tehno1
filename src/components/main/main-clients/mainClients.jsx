import TitleBlock from "../../UI/titleBlock/titleBlock";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay'
import 'swiper/css';
import { useEffect, useState } from "react";

function MainClients() {

  const [raz, setRaz] = useState(4)

  useEffect(()=> {
    setRaz(Math.floor(window.innerWidth / 500))
  },[])

  return (
    <div id="Clients" className="main-clients">
      <div className="conteiner">
        <TitleBlock text={'CLIENTS'} color={'#fff'}/>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={raz}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
        <SwiperSlide className="slider-client">
          <div className="logo-clients"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainClients;