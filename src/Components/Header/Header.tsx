import SHeader from "./Header.styles";
import images from "../../Constants/images";
const Header = () => {
  return (
    <SHeader>
      <img src={images.HomepageBG} alt="laptop" className="desktop-bg"/>
      <img src={images.HomepageBG2} alt="laptop" className="mobile-bg"/>
      <div>
        <div>
          <h1>Computer Engineering</h1>
          <span>142,765 Computer Engineers follow this</span>
        </div>
      </div>
    </SHeader>
  );
};

export default Header;
