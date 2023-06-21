import styled from "styled-components";
import ArticleControls from "./ArticleControls/ArticleControls";
const SArticleSection = styled.div`
  max-width: 1040px;
  margin: 37px auto;
`;

const ArticleSection = () => {
  return (
    <SArticleSection>
      <ArticleControls />
    </SArticleSection>
  );
};

export default ArticleSection;
