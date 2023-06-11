function MainServiceItem({img, title}) {
    return (
        <div className="main-service-item">
            <div className="main-service-item-bg"></div>
            <div className="main-service-item-title">{title}</div>
            <div className="main-service-item-img-block">
                <img src={img} alt="" />
            </div>
        </div>
    );
  }
  
  export default MainServiceItem;