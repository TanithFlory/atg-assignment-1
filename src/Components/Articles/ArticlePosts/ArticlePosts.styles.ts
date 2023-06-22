import { styled } from "styled-components";

export const SArticlePosts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SArticleCard = styled.div`
  max-height: 472px;
  width: 100%;
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
    h2 {
      text-wrap: balance;
      line-height: 20px;
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
    justify-content: space-between;
  }
  .location-details {
    display: flex;
    gap: 3rem;
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    span {
      font-size: 15px;
      font-weight: 500;
    }
  }

  .visit-website,
  .apply-on {
    width: 100%;
    max-width: 650px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 600;
    border: 0.7px solid #a9aeb8;
    border-radius: 10px;
  }
  .visit-website {
    color: #e56135;
  }
  .apply-on {
    color: #02b875;
  }
  .name-views {
    span:nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 740px) {
    max-width: 360px;
    max-height: 370px;
    grid-template-rows: 120px 1fr;
    align-items: center;
    & > img:first-child {
      width: 100%;
      height: 100%;
    }
    .inner-wrapper {
      display: grid;
    }
    .article-details {
      gap: 0;
      padding: 16px;
      & > span:first-child,
      p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        margin-bottom: 6px;
      }
      h2 {
        line-height: 20px;
        font-size: 1rem;
        text-wrap: inherit;
        margin-bottom: 10px;
      }
    }
    .user-details {
      margin-top: 20px;
      img {
        height: 37px;
        aspect-ratio: 1/1;
      }
    }
    .name-views {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-size: 0.81rem;
        font-weight: 700;
      }
      span:nth-child(2) {
        display: block;
        font-size: 0.8rem;
      }
    }
    .location-details {
      margin-bottom: 1rem;
      span {
        font-size: 0.75rem;
      }
    }
  }
`;
