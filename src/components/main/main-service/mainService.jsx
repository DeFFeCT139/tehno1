import img from '../../../image/Rectangle.svg'
import Buttom from '../../UI/buttom/buttom';
import TitleBlock from '../../UI/titleBlock/titleBlock';
import MainServiceItem from './main-service-item/mainServiceItem';

function MainService() {
    return (
      <div id='Services' className="main-service">
        <div className="conteiner">
            <TitleBlock text={'SERVICES'} color={'#fff'}/>
            <div className="main-service-items">
                <MainServiceItem img={img}/>
                <MainServiceItem img={img}/>
                <MainServiceItem img={img}/>
            </div>
            <Buttom textContent={'Call to action'} bacgr={'#171717'}/>
        </div>
      </div>
    );
  }
  
  export default MainService;