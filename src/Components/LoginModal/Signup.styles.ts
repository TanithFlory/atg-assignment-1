import { styled } from "styled-components";

const SSignup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 101vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 9999;
  .modal-wrapper {
    background-color: white;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    max-width: 736px;
    max-height: 513px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    & > :nth-child(2) {
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > :nth-child(3) {
      padding: 0 2rem 2rem;
      display: flex;
      justify-content: center;
      gap: 24px;
    }
  }
  .top-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px 0;
    background: #effff4;
    top: 0;
    span {
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: center;
      color: #008a45;
    }
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    form {
      input,
      input:focus {
        background: #f7f8fa;
        height: 46px;
        outline: none;
        border: 1px solid #d9d9db;
        box-sizing: border-box;
        color: #8a8a8a;
        padding-left: 12px;
        max-width: 320px;
      }
      input[placeholder="First Name"],
      input[placeholder="Second Name"] {
        max-width: 160px;
      }
      input::placeholder {
        font-weight: 500;
        font-size: 1rem;
        font-family: "IBM Plex Sans";
        color: #8a8a8a;
      }
      & > div:first-child {
        display: flex;
      }
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
      button {
        background: #2f6ce5;
        width: 100%;
        border-radius: 20px;
        max-width: 320px;
        height: 40px;
        margin: 19px 0;
        border: none;
        cursor: pointer;
      }
      h5 {
        margin: 5px 0;
        color: red;
        text-align: left;
      }
    }
  }
  .right-image {
    flex-grow: 1;
    span {
      font-size: 11px;
      font-weight: 400;
      letter-spacing: -0.008em;
      color: #666666;
    }
  }
  .sign-in {
    span {
      font-size: 13px;
      font-weight: 400;
      span {
        color: #2f6ce5;
        font-weight: 600;
      }
    }
  }
  .signup-external {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .facebook,
  .google {
    width: 100%;
    border: 0.6px solid #d9d9db;
    border-radius: 2px;
    max-width: 320px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
  .mobile-signin {
    display: none;
  }

  .close {
    position: absolute;
    right: 15px;
    top: 15px;
  }
  @media screen and (max-width: 672px) {
    h1 {
      font-size: 1.125rem;
      margin: 22px 0;
    }

    .close {
      right: 20px;
      top: 22px;
    }
    .top-title {
      display: none;
    }
    .sign-in {
      display: none;
    }
    .right-image {
      display: none;
    }

    input {
      width: 100%;
    }
    .modal-wrapper {
      max-height: max-content;
      height: auto;
      bottom: 0;
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        text-decoration: underline;
        font-size: 0.8rem;
      }
    }
    .form-wrapper {
      width: 100%;
      max-width: 320px;
      form {
        button {
          font-size: 0.8rem;
          width: 150px;
        }
      }
    }
    .mobile-signin {
      display: block;
    }
  }
`;

export default SSignup;
