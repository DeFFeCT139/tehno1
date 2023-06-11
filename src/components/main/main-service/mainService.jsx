import img from '../../../image/Rectangle.svg'
import Buttom from '../../UI/buttom/buttom';
import TitleBlock from '../../UI/titleBlock/titleBlock';
import MainServiceItem from './main-service-item/mainServiceItem';

function MainService() {
    return (
      <div id='Services' className="main-service">
        <div className="conteiner">
            <TitleBlock text={'УСЛУГИ'} color={'#fff'}/>
            <div className="main-service-items">
                <MainServiceItem title={'Парсинг'} img={img}/>
                <MainServiceItem title={'Cайты'} img={img}/>
                <MainServiceItem title={'Боты'} img={img}/>
            </div>
            <Buttom textContent={'Связаться'} bacgr={'#171717'}/>
        </div>
      </div>
    );
  }
  
  export default MainService;