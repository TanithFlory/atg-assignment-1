import images from "../../Constants/images";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/firebase";
import { useState, useEffect } from "react";
import SignUpExternal from "./SignUpExternal";

interface IProps {
  signin: boolean;
  signInForm(): void;
}

const SignUpForm = (props: IProps) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    pass: "",
    fName: "",
    sName: "",
    confirmPass: "",
  });
  const [error, setError] = useState<boolean>();
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUserDetails((prev) => {
      return {
        ...prev,
        [target.name]: target.value,
      };
    });
  };

  useEffect(() => {
    if (userDetails.confirmPass === userDetails.pass) {
      setError(false);
    } else setError(true);
  }, [userDetails.confirmPass]);

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const type = (e.target as Element).querySelector("button")?.innerHTML;

    if (type === "Sign Up") {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          userDetails.email,
          userDetails.pass
        );

        if (response) {
          localStorage.setItem("accessToken", await response.user.getIdToken());
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (type === "Sign In") {
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          userDetails.email,
          userDetails.pass
        );

        if (response) {
          localStorage.setItem("accessToken", await response.user.getIdToken());
          window.location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={submitHandler}>
        <div>
          {!props.signin && (
            <input
              placeholder="First Name"
              type="text"
              name="fName"
              onChange={onChangeHandler}
              pattern="^[a-zA-Z]+$"
              max={16}
              required
              value={userDetails.fName}
            />
          )}
          {!props.signin && (
            <input
              placeholder="Second Name"
              type="text"
              name="sName"
              onChange={onChangeHandler}
              pattern="^[a-zA-Z]+$"
              required
              min={3}
              max={16}
              value={userDetails.sName}
            />
          )}
        </div>
        <div>
          <input
            placeholder="Email"
            onChange={onChangeHandler}
            required
            name="email"
            type="email"
            pattern="^[\w\-.]+@([\w]{3,6}\.)+([\w]{2,5})$"
            value={userDetails.email}
          />
          <input
            placeholder="Password"
            onChange={onChangeHandler}
            required
            name="pass"
            type="password"
            min={6}
            value={userDetails.pass}
          />
          {!props.signin && (
            <input
              onChange={onChangeHandler}
              placeholder="Confirm Password"
              required
              type="password"
              name="confirmPass"
              min={6}
              value={userDetails.confirmPass}
            />
          )}
          {error && <h5>Password doesn't match.</h5>}
        </div>
        <div className="button">
          <button type="submit">
            {props.signin ? "Sign In" : "Create Account"}
          </button>
          <div className="mobile-signin" onClick={() => props.signInForm()}>
            <span>or, {props.signin ? "Sign up" : "Sign in"}</span>
          </div>
        </div>
      </form>
      <SignUpExternal signin={props.signin} />
    </div>
  );
};
export default SignUpForm;
