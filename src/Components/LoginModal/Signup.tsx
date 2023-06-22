import { MouseEvent, useState } from "react";
import images from "../../Constants/images";
import SSignup from "./Signup.styles";

interface IProps {
  disableModal(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void;
}

const Signup = (props: IProps) => {
  const [signin, setSignin] = useState(false);
  return (
    <SSignup onClick={(e) => props.disableModal(e)} className="backdrop">
      <div className="modal-wrapper">
        <div className="top-title">
          <span>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
        </div>
        <div>
          <div>
            <h1>{signin ? "Welcome back!" : "Create Account"}</h1>
          </div>
          <div className="sign-in" onClick={() => setSignin((prev) => !prev)}>
            <span>
              {signin ? "Already have an account?" : "Don't have an account?"}{" "}
              <span className="clickable">
                {" "}
                {signin ? "Sign In" : "Sign Up"}
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className="form-wrapper">
            <form>
              <div>
                <input
                  data-display={signin && "none"}
                  placeholder="First Name"
                  type="text"
                />
                <input
                  data-display={signin && "none"}
                  placeholder="Second Name"
                  type="text"
                />
              </div>
              <div>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <input
                  data-display={signin && "none"}
                  placeholder="Confirm Password"
                  type="password"
                />
              </div>
              <button>{signin ? "Sign In" : "Create Account"}</button>
            </form>
            <div className="signup-external">
              <div className="facebook">
                <img src={images.Facebook} alt="facebook" />
                <span>Sign {signin ? "in" : "up"} with Facebook</span>
              </div>
              <div className="google">
                <img src={images.Google} alt="google" />
                <span>Sign {signin ? "in" : "up"} with Google</span>
              </div>
            </div>
          </div>
          <div className="right-image">
            <img src={images.SignupModal} alt="signup-img" />
            <div>
              <span>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </SSignup>
  );
};

export default Signup;
