import { MouseEvent, useState } from "react";
import images from "../../Constants/images";
import SSignup from "./Signup.styles";
import SignUpForm from "./SignupForm";

interface IProps {
  disableModal(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void;
  disableModalClick(): void;
}

const Signup = (props: IProps) => {
  const [signin, setSignin] = useState(false);
  const signInForm = () => {
    setSignin((prev) => !prev);
  };
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
              {signin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span className="clickable">
                {" "}
                {signin ? "Sign Up" : "Sign In"}
              </span>
            </span>
          </div>
        </div>
        <div>
          <SignUpForm signin={signin} signInForm={signInForm} />
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
        <div
          className="close clickable"
          onClick={() => props.disableModalClick()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"
              fill="#212529"
            />
          </svg>
        </div>
      </div>
    </SSignup>
  );
};

export default Signup;
