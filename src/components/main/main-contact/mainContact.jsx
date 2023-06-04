import Buttom from "../../UI/buttom/buttom";
import TitleBlock from "../../UI/titleBlock/titleBlock";

function MainContact() {
  return (
    <div id="Contact" className="main-contact">
      <div className="main-contact-block">
        <div className="conteiner">
          <div className="main-contact-block-inner">
            <div className="main-contact-block-left">
              <TitleBlock text={'CONTACT US'} color={'#000'}/>
              <div className="main-contact-block-title">Call to action that excites the visitor to try your product</div>
              <div className="main-contact-block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere pretium nisl. In in arcu gravida, gravida dolor quis, sagittis tortor. Vivamus pharetra dui leo, eu dictum risus feugiat sit amet.</div>
              <Buttom textContent={'Call to action'} bacgr={'#2E8691'}/>
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