import { styled } from "styled-components";

export const SArticlePosts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SArticleCard = styled.div`
  max-height: 472px;
  max-width: 692px;
  display: grid;
  grid-template-rows: 220px 1fr;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 1rem;
  .article-details {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h2,
    p {
      margin: 0;
    }
    & > span:first-child {
      font-size: 18px;
      font-weight: 600;
    }
    h2 {
      font-size: 22px;
      font-weight: 600;
      line-height: 30px;
    }
    p {
      font-weight: 400;
      line-height: 25px;
    }
  }
  .article-title {
    display: flex;
    align-items: flex-start;
  }
  .user-details {
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
  }
  .three-dots {
    padding-top: 12px;
  }
  .clickable {
    cursor: pointer;
  }
`;
