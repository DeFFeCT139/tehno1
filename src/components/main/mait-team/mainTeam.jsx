import TitleBlock from '../../UI/titleBlock/titleBlock';
import i from '../../../image/dAVC_KSOoVw.jpg'
import i1 from '../../../image/team/Gleb.png'
import i2 from '../../../image/team/Anaste.png'
import i3 from '../../../image/team/Ghecka.jpg'
import i4 from '../../../image/team/Nikola.jpg'
import i5 from '../../../image/team/Andre.jpg'
import i6 from '../../../image/team/Dimon.png'
import i7 from '../../../image/team/Polina.jpg'
import i8 from '../../../image/team/Nick.jpg'
import i9 from '../../../image/team/PAvel.jpg'
import i10 from '../../../image/team/Dobr.jpg'
import i11 from '../../../image/team/Egor.png'

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
          <TitleBlock text={'КОМАНДА'} color={'#fff'}/>
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
              <SwiperSlide className='team-slide imf-tema3'>
                <MainTeamBlcok i={i1} name={'Глеб Чепрасов'} prof={'Генеральный директор'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide imf-tema3'>
                <MainTeamBlcok i={i2} name={'Анастасия Чепрасова'} prof={'Директор по Документации и Информационной безопасности'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i3} name={'Евгений Устинов'} prof={'Директор отдела разработки WEB решений'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i4} name={'Николай Кондратенко'} prof={'Технический Директор'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i5} name={'Андрей Волков'} prof={'Директор отдела разработки Технических и Образовательных решений'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i6} name={'Дмитрий Герасимов'} prof={'Аналитик'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i7} name={'Полина Марецкая'} prof={'Дизайнер UX/UI, SMM менеджер'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i} name={'Ходак Денис'} prof={'Зам главы Web-разработки'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i8} name={'Никита Львов'} prof={'Web Front-End разработчик'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide imf-tema3'>
                <MainTeamBlcok i={i11} name={'Егор Архаров'} prof={'Project manage'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i9} name={'Павел Кудрявцев'} prof={'Зам. Директор отдела разработки технических и образовательных решений'}/>
              </SwiperSlide>
              <SwiperSlide className='team-slide'>
                <MainTeamBlcok i={i10} name={'Добрыня Авдюшин'} prof={'Зам. Директор отдела разработки технических и образовательных решений'}/>
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