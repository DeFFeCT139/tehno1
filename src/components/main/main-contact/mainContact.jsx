import Buttom from "../../UI/buttom/buttom";
import TitleBlock from "../../UI/titleBlock/titleBlock";


function MainContact() {
  return (
    <div id="Contact" className="main-contact">
      <div className="main-contact-block">
        <div className="conteiner">
          <div className="main-contact-block-inner">
            <div className="main-contact-block-left">
              <TitleBlock text={'КОНТАКТЫ'} color={'#000'}/>
              <div className="main-contact-block-left-inner">
                <div className="main-contact-left-inner-block">
                  <div className="main-contact-block-title">Нас не надо вычеслять по IP</div>
                  <div className="main-contact-block-desc">
                    <div className="main-contact-block-desc-item">
                      <img src='' alt="" />
                      <span>+7 (964) 634 55-53</span>
                    </div>
                    <div className="main-contact-block-desc-item">
                      <img src='' alt="" />
                      <span>г. Москва, ПР-КТ МИРА, Д. 102, К. 1, ПОМЕЩ. 3/7, ОФИС 59</span>
                    </div>
                    <div className="main-contact-block-desc-item">
                      <img src='' alt="" />
                      <span>@tehnosoft</span>
                    </div>
                    <div className="main-contact-block-desc-item">
                      <img src='' alt="" />
                      <span>GLEB.KAK2@YANDEX.RU</span>
                    </div>
                  </div>
                </div>
                <Buttom textContent={'Связаться'} bacgr={'#2E8691'}/>
              </div>
            </div>
            <div className="main-contact-block-right">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A46a53ef343964c129ea8c1304cba219ad30599cb72229303ca7a427c5b91865c&amp;source=constructor" width="680" height="620" frameBorder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;