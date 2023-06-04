import Buttom from "../UI/buttom/buttom";
import logo from '../../image/Logo.svg'

function Header() {
    return (
      <div className="header">
        <div className="header-inner">
            <div className="header-left">
                <img src={logo} alt="" className="header-logo" />
            </div>
            <div className="header-right">
                <div className="header-right-navbar">
                    <a href="#About" className="header-right-nav-link">About</a>
                    <a href="#Services" className="header-right-nav-link">Services</a>
                    <a href="#Contact" className="header-right-nav-link">Contact</a>
                    <a href="#Clients" className="header-right-nav-link">Clients</a>
                </div>
                <Buttom bacgr={'#2E8691'} textContent={'Contac Us'}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  