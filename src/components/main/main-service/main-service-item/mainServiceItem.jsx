function MainServiceItem({img}) {
    return (
        <div className="main-service-item">
            <div className="main-service-item-bg"></div>
            <div className="main-service-item-title">Headline <br/>about the<br/>service</div>
            <div className="main-service-item-img-block">
                <img src={img} alt="" />
            </div>
        </div>
    );
  }
  
  export default MainServiceItem;