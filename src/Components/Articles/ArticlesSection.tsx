import styled from "styled-components";
import ArticleControls from "./ArticleControls/ArticleControls";
import ArticlePosts from "./ArticlePosts/ArticlePosts";
import Location from "./Location/Location";
const SArticleSection = styled.div`
  max-width: 1040px;
  margin: 37px auto;
  .inner-wrapper {
    display: flex;
    justify-content: space-between;
  }
`;

const ArticleSection = () => {
  return (
    <SArticleSection>
      <ArticleControls />
      <div className="inner-wrapper">
        <ArticlePosts />
        <Location />
      </div>
    </SArticleSection>
  );
};

export default ArticleSection;
