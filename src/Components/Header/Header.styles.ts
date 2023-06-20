import styled from "styled-components";
const SHeader = styled.header`
  position: relative;
  height: 440px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    display: flex;
    align-items: end;
    div {
      margin: 0 0 80px 200px;
      h1 {
        margin: 0;
        font-size: 2.25rem;
        font-family: "IBM Plex Sans";
      }
      span {
        font-weight: 400;
      }
    }
  }
`;

export default SHeader;
