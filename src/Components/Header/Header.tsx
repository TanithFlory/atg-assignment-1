import HomepageBG from "../../assets/homepage-bg.png";
import SHeader from "./Header.styles";

const Header = () => {
  return (
    <SHeader>
      <img src={HomepageBG} />
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
