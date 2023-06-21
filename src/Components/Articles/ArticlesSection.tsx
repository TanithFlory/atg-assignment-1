import styled from "styled-components";
import ArticleControls from "./ArticleControls/ArticleControls";
import ArticlePosts from "./ArticlePosts/ArticlePosts";
const SArticleSection = styled.div`
  max-width: 1040px;
  margin: 37px auto;
`;

const ArticleSection = () => {
  return (
    <SArticleSection>
      <ArticleControls />
      <ArticlePosts />
    </SArticleSection>
  );
};

export default ArticleSection;
