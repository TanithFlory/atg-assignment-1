import { styled } from "styled-components";

const SUserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
  }
  & > div:first-child {
    gap: 1rem;
  }
  & > div:nth-child(2) {
    gap: 40px;
    div:first-child {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  .share-button {
    background: #edeef0;
    border-radius: 2px;
    padding: 9px 14px;
  }
`;

export default SUserDetails;
