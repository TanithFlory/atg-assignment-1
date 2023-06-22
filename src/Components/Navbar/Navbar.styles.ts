import { styled } from "styled-components";

const SNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 72px;
  width: 100vw;

  .navbar__search-box {
    width: 100%;
    max-width: 360px;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f2f2f2;
    border-radius: 21px;
    padding-left: 15px;
    box-sizing: border-box;
    input {
      background-color: inherit;
      width: 100%;
      height: 42px;
      padding: 0;
      outline: none;
      border: none;
      border-radius: 21px;
    }
  }
  .navbar__create-acc {
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 1rem;
      font-weight: 500;
      span {
        color: #2f6ce5;
        font-weight: 700;
      }
    }
  }
  .navbar-shapes {
    display: none;
  }
  @media screen and (max-width: 740px) {
    height: 24px;
    justify-content: flex-end;

    .navbar-shapes {
      display: block;
      margin-right: 12px;
    }
  }
`;

export default SNavbar;
