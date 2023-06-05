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
      new Rellax('.rellax') 
  }
  
    return ( 
      <div className="Parallax"> 
        <img className="parallax-sloy3" src={sloy3} alt="" />
        <div className="text-tehnosoft"><span>MTK ТехноСофт</span></div>
        <img className="rellax parallax-sloy2" data-rellax-speed="3" src={sloy2} alt="" />
        <div className="rellax pdlo-parallax-bg" data-rellax-speed="20"></div>
        <div className="rellax parallax-sloy1" data-rellax-speed="20"></div>
      </div>
    );
  } 
  
  export default MainParalx;