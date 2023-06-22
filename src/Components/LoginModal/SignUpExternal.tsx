import images from "../../Constants/images";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import auth from "../../Firebase/firebase";
interface IProps {
  signin: boolean;
}

const SignUpExternal = (props: IProps) => {
  const loginHandler = async (type: string): Promise<void> => {
    let provider;
    if (type === "google") {
      provider = new GoogleAuthProvider();
    } else provider = new FacebookAuthProvider();

    try {
      const response = await signInWithPopup(auth, provider);
      if (response) {
        localStorage.setItem("accessToken", await response.user.getIdToken());
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-external">
      <div
        className="facebook clickable"
        onClick={() => loginHandler("facebook")}
      >
        <img src={images.Facebook} alt="facebook" />
        <span>Sign {props.signin ? "in" : "up"} with Facebook</span>
      </div>
      <div className="google clickable" onClick={() => loginHandler("google")}>
        <img src={images.Google} alt="google" />
        <span>Sign {props.signin ? "in" : "up"} with Google</span>
      </div>
    </div>
  );
};

export default SignUpExternal;
