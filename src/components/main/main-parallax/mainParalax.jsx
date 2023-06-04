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
        <img className="rellax parallax-sloy3" data-rellax-speed="-5" src={sloy3} alt="" />
        <div className="rellax text-tehnosoft" data-rellax-speed="-8"><span>MTK ТехноСофт</span></div>
        <img className="rellax parallax-sloy2" data-rellax-speed="-4" src={sloy2} alt="" />
        <img className="rellax parallax-sloy1" data-rellax-speed="0" src={sloy1} alt="" />
      </div>
    );
  }
  
  export default MainParalx;