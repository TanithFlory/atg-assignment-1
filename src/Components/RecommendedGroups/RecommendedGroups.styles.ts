import styled from "styled-components";

const SRecGroups = styled.div`
  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 24px;
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }
  .group-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    div:first-child {
      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
    div:nth-child(2) {
      background: #edeef0;
      border-radius: 14px;
      width: 60px;
      height: 24px;
      padding: 4px 12px;
      box-sizing: border-box;
      span {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .see-more {
    margin-top: 54px;
    text-align: right;
    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #2f6ce5;
    }
  }
`;

export default SRecGroups;
