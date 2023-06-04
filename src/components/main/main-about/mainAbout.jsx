import arrow from '../../../image/Icon.svg'
import Buttom from '../../UI/buttom/buttom';

function MainAbout() {
    return (
      <div id='About' className="main-about">
        <div className="main-inner">
            <div className="conteiner">
                <div className="main-conteinr">
                    <div className="main-title">HEADLINE HIGHLIGHTING INTRODUCE OF<br/> YOUR PRODUCT </div>
                    <div className="main-button-croll">
                        <img src={arrow} alt="" />
                        <span>CALL TO ACTION TO SCROLL</span>
                    </div>
                    <div className="main-content-info">
                        <div className="main-content-info-title">Headline about what your product does</div>
                        <div className="main-content-info-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non est nunc. Donec suscipit velit at sem scelerisque, et elementum leo accumsan. Nunc varius condimentum purus vitae dapibus. Vestibulum feugiat leo libero, eu egestas quam blandit non. Donec semper leo nec nibh ultrices, sed interdum sapien suscipit. Pellentesque dignissim ligula nec turpis vulputate volutpat. Proin sit amet tempus turpis. Maecenas at ante est.</div>
                        <Buttom textContent={'Call to action'} bacgr={'#2E8691'}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainAbout;