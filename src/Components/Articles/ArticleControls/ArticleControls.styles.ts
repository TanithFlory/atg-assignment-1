import { styled } from "styled-components";

const SArticleControls = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;

  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;
    .write-post,
    .join-group {
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 8px 12px;
      font-weight: 500;
      font-size: 15px;
      /* gap: 5px; */
    }
    .write-post {
      background-color: #edeef0;
      gap: 1rem;
    }
    .join-group {
      gap: 6px;
      background-color: #2f6ce5;
      color: white;
    }
  }
`;

export default SArticleControls;
