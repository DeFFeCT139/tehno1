import { useEffect } from "react";
import Rellax from "rellax";
import sloy1 from '../../../image/image 1.png'
import sloy2 from '../../../image/image 12.png'
import sloy3 from '../../../image/image 1.jpg'

function MainParalx() {
 
  useEffect(() =>{
    setRellax()
  },[])
   

  const setRellax = () => {
      new Rellax('.rellax',{
        breakpoints:[320, 640, 996] 
      }) 
  }
  
    return ( 
      <div className="Parallax"> 
        <img className="parallax-sloy3" src={sloy3} alt="" />
        <div className="text-tehnosoft"><span>MTK ТехноСофт</span></div>
        <img 
          className="rellax parallax-sloy2"
          src={sloy2} 
          alt="" 
          data-rellax-mobile-speed="1"
          data-rellax-tablet-speed="3"
          data-rellax-desktop-speed="3"
        />
        <div 
          className="rellax pdlo-parallax-bg" 
          data-rellax-mobile-speed="10"
          data-rellax-tablet-speed="15"
          data-rellax-desktop-speed="15"
        ></div>
        <div 
          className="rellax parallax-sloy1" 
          data-rellax-mobile-speed="10"
          data-rellax-tablet-speed="15"
          data-rellax-desktop-speed="15"
        ></div>
      </div>
    );
  } 
  
  export default MainParalx;