import arrow from '../../../image/Icon.svg'
import Buttom from '../../UI/buttom/buttom';

function MainAbout() {
    return (
      <div id='About' className="main-about">
        <div className="main-inner">
            <div className="conteiner">
                <div className="main-conteinr">
                    <div className="main-title">РАСШИРЯЕМ ВОЗМОЖНОСТИ ЦИФРОВОГО МИРА</div>
                    <div className="main-button-croll">
                        <img src={arrow} alt="" />
                        <span>БОЛЬШЕ ИНТЕРЕСНОГО НИЖЕ</span>
                    </div>
                    <div className="main-content-info">
                        <div className="main-content-info-title">Компания<br/> МТК ТехноСофт</div>
                        <div className="main-content-info-desc">Перспективная технологическая компания, специализирующаяся на создании передовых сайтов, приложений и ботов. Наша опытная команда разработчиков занимается предоставлением инновационных и индивидуальных решений для удовлетворения уникальных потребностей наших клиентов.</div>
                        <Buttom textContent={'Связаться'} bacgr={'#2E8691'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainAbout;