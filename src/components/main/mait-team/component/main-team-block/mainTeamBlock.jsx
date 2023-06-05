function MainTeamBlcok({i, name, prof}) {
  return (
    <div className="main-team-slidere-item">
      <div className="main-team-slidere-item-bg">
        <span>TEHNOSOFT</span>
      </div>
      <div style={{backgroundImage: `url(${i})`}} className="main-team-slidere-item-image"></div>
      <div className="main-team-slidere-item-info">
        <div className="main-team-slidere-item-info-name">{name}</div>
        <div className="main-team-slidere-item-info-desc">{prof}</div>
      </div>
    </div>
  );
}

export default MainTeamBlcok;