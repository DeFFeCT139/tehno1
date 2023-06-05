import MainAbout from "./main-about/mainAbout";
import MainClients from "./main-clients/mainClients";
import MainContact from "./main-contact/mainContact";
import MainParalx from "./main-parallax/mainParalax";
import MainService from "./main-service/mainService";
import MainSkills from "./main-skills/mainSkills";
import MainTeam from "./mait-team/mainTeam";

function Main() {
    return (
      <div className="main">
        <MainParalx/>
        <div className="main-bg">
          <MainAbout/>
          <MainSkills/>
          <MainService/>
          <MainTeam/>
          <MainContact/>
          <MainClients/>
        </div>
      </div>
    );
  }
  
  export default Main;