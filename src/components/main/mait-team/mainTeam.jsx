import TitleBlock from '../../UI/titleBlock/titleBlock';
import i from '../../../image/dAVC_KSOoVw.jpg'
import MainTeamBlcok from './component/main-team-block/mainTeamBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import arrow from '../../../image/rightarrow1_80967.svg'
import { useEffect, useState } from 'react';



function MainTeam() {

  const [raz, setRaz] = useState(4)
  const [ot, setOt] = useState(60)

  useEffect(()=> {
    console.log(document.getElementById('conteiner').clientWidth)
    if (document.getElementById('conteiner').clientWidth >= 500) {
      setRaz(Math.floor(document.getElementById('conteiner').clientWidth / 400))
      setOt(60)
    } else {
      setRaz(Math.floor(document.getElementById('conteiner').clientWidth / 300))
      setOt((document.getElementById('conteiner').clientWidth - 300))
    }
  },[])

  return (
    <div id='Team' className="main-team">
        <div id='conteiner' className="conteiner">
          <TitleBlock text={'TEAM'} color={'#fff'}/>
          <div className="main-team-slider">
            <Swiper
              modules={[Navigation, Pagination]}
              className='slider'
              spaceBetween={ot}
              slidesPerView={raz}
              pagination={{ 
                clickable: true ,
                el: ".pagination"
              }}
              navigation={{
                nextEl: ".slider-navigete-righst",
                prevEl: ".slider-navigete-left"
              }}
            >
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i} name={'Ходак Денис'} prof={'Зам главы Web-разработки'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i} name={'Ходак Денис'} prof={'Зам главы Web-разработки'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i} name={'Ходак Денис'} prof={'Зам главы Web-разработки'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i} name={'Ходак Денис'} prof={'Зам главы Web-разработки'}/>
              </SwiperSlide>
            </Swiper>
            <div className="slider-navigate">
              <div className="slider-navigete-left">
                <img src={arrow} alt="" />
              </div>
              <div className="slider-pagination">
                <div className="pagination"></div>
              </div>
              <div className="slider-navigete-righst">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default MainTeam;