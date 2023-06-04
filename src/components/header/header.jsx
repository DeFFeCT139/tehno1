import Buttom from "../UI/buttom/buttom";
import logo from '../../image/Logo.svg'
import clouse from '../../image/close_FILL0_wght400_GRAD0_opsz48.svg'
import menu from '../../image/menu_FILL0_wght400_GRAD0_opsz48.svg'
import { useEffect, useState } from "react";

function Header() {

    const [header, headerActive] = useState(false)

    useEffect(() => {
      getHeader()
    },[header])

    const getHeader = () => {
      let element = document.getElementById('header-in')
      if (header === false) {
        element.classList.remove('header-right-active')
      } else {
        element.classList.add('header-right-active')
      }
    }
    

    return (
      <div className="header">
        <div className="header-inner">
            <div className="header-left">
                <img src={logo} alt="" className="header-logo" />
            </div>
            <div id="header-in" className="header-right">
                <div className="header-right-open-cloused">
                  <img onClick={() => headerActive(false)} src={clouse} className="header-right-open-cloused-clou" alt="" />
                  <img onClick={() => headerActive(true)} src={menu} className="header-right-open-cloused-menu" alt="" />
                </div>
                <div className="header-right-navbar">
                    <a href="#About" className="header-right-nav-link">About</a>
                    <a href="#Skills" className="header-right-nav-link">Skills</a>
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
  