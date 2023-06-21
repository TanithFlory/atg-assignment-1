import { SArticleCard, SArticlePosts } from "./ArticlePosts.styles";
import images from "../../../Constants/images";
const ArticlePosts = () => {
  const ArticleData = [
    {
      id: "article-1",
      type: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      user: "Sarthak Kamra",
      articleImg: images.Article1,
      userImg: images.Sarthak,
    },
    {
      id: "article-2",
      type: "🔬️ Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      user: "Sarah West",
      articleImg: images.Article2,
      userImg: images.Sarah,
    },
  ];
  return (
    <SArticlePosts>
      {ArticleData.map((data) => {
        return (
          <SArticleCard key={data.id}>
            <img src={data.articleImg} alt="article-img" />
            <div className="article-details">
              <span>{data.type}</span>
              <div className="article-title">
                <h2>{data.title}</h2>
                <svg
                  width="20"
                  height="6"
                  viewBox="0 0 20 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="three-dots clickable"
                >
                  <path
                    d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                    fill="black"
                  />
                </svg>
              </div>
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="user-details">
                <div>
                  <img src={data.userImg} alt="user-img" />
                  <span>{data.user}</span>
                </div>
                <div>
                  <div>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 6C2.0475 2.7075 5.25 0.375 9 0.375C12.75 0.375 15.9525 2.7075 17.25 6C15.9525 9.2925 12.75 11.625 9 11.625C5.25 11.625 2.0475 9.2925 0.75 6ZM15.615 6C14.3775 3.4725 11.8425 1.875 9 1.875C6.1575 1.875 3.6225 3.4725 2.385 6C3.6225 8.5275 6.1575 10.125 9 10.125C11.8425 10.125 14.3775 8.5275 15.615 6ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM5.625 6C5.625 4.14 7.14 2.625 9 2.625C10.86 2.625 12.375 4.14 12.375 6C12.375 7.86 10.86 9.375 9 9.375C7.14 9.375 5.625 7.86 5.625 6Z"
                        fill="#525252"
                      />
                    </svg>
                    <span>1.4k views</span>
                  </div>
                  <div className="share-button clickable">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 11.06C10.93 11.06 10.42 11.285 10.03 11.6375L4.6825 8.525C4.72 8.3525 4.75 8.18 4.75 8C4.75 7.82 4.72 7.6475 4.6825 7.475L9.97 4.3925C10.375 4.7675 10.9075 5 11.5 5C12.745 5 13.75 3.995 13.75 2.75C13.75 1.505 12.745 0.5 11.5 0.5C10.255 0.5 9.25 1.505 9.25 2.75C9.25 2.93 9.28 3.1025 9.3175 3.275L4.03 6.3575C3.625 5.9825 3.0925 5.75 2.5 5.75C1.255 5.75 0.25 6.755 0.25 8C0.25 9.245 1.255 10.25 2.5 10.25C3.0925 10.25 3.625 10.0175 4.03 9.6425L9.37 12.7625C9.3325 12.92 9.31 13.085 9.31 13.25C9.31 14.4575 10.2925 15.44 11.5 15.44C12.7075 15.44 13.69 14.4575 13.69 13.25C13.69 12.0425 12.7075 11.06 11.5 11.06Z"
                        fill="#2D2D2D"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </SArticleCard>
        );
      })}
    </SArticlePosts>
  );
};

export default ArticlePosts;
