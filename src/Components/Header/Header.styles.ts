import styled from "styled-components";
const SHeader = styled.header`
  position: relative;
  height: 440px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mobile-bg {
    display: none;
  }
  & > div {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    color: white;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    div {
      position: absolute;
      bottom: 80px;
      left: 120px;
      h1 {
        margin: 0;
        font-size: 2.25rem;
        font-family: "IBM Plex Sans";
      }
      span {
        font-weight: 400;
        font-size: 1.15rem;
      }
    }
  }
  @media screen and (max-width: 740px) {
    & > div {
      width: 101%;
    }
    height: 236px;
    .desktop-bg {
      display: none;
    }
    .mobile-bg {
      display: block;
      width: 101%;
    }
    & > div {
      div {
        left: 10px;
        bottom: 24px;
        h1 {
          font-size: 1rem;
        }
        span {
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export default SHeader;
