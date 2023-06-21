import { styled } from "styled-components";

const SLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 243px;

  .location-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:first-child {
      display: flex;
      align-items: center;
      gap: 4px;
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .location-privacy {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    font-size: 12px;
    font-weight: 400;
    color: #808080;
  }
`;
export default SLocation;
