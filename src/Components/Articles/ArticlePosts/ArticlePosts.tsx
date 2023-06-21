import { SArticleCard, SArticlePosts } from "./ArticlePosts.styles";
import images from "../../../Constants/images";
import UserDetails from "./UserDetails";
import ThreeDots from "../../../assets/SVG/ThreeDots";
import LocationSVG from "./LocationSVG";
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
                <ThreeDots />
              </div>
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <UserDetails userImg={data.userImg} user={data.user} />
            </div>
          </SArticleCard>
        );
      })}
      <SArticleCard>
        <img src={images.Article3} alt="article-img" />
        <div className="article-details">
          <span>🗓️ Meetup</span>
          <div className="article-title">
            <h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
            <div>
              <ThreeDots />
            </div>
          </div>
          <div className="location-details">
            <div>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8333 2.49992H13V0.833252H11.3333V2.49992H4.66667V0.833252H3V2.49992H2.16667C1.24167 2.49992 0.508333 3.24992 0.508333 4.16659L0.5 15.8333C0.5 16.7499 1.24167 17.4999 2.16667 17.4999H13.8333C14.75 17.4999 15.5 16.7499 15.5 15.8333V4.16659C15.5 3.24992 14.75 2.49992 13.8333 2.49992ZM13.8333 15.8333H2.16667V6.66658H13.8333V15.8333ZM3.83333 8.33325H8V12.4999H3.83333V8.33325Z"
                  fill="black"
                />
              </svg>
              <span>Fri, 12 Oct, 2018</span>
            </div>
            <LocationSVG location="Ahmedabad, India" />
          </div>
          <div className="visit-website">
            <span>Visit Website</span>
          </div>
          <UserDetails userImg={images.Ronal} user={"Ronal Jones"} />
        </div>
      </SArticleCard>
      <SArticleCard style={{ gridTemplateRows: "1fr" }}>
        <div className="article-details">
          <span>💼️ Job</span>
          <div className="article-title">
            <h2>Software Developer</h2>
            <ThreeDots />
          </div>
          <div className="location-details">
            <div>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 4.00008V2.33341H7.33342V4.00008H10.6667ZM2.33341 5.66675V14.8334H15.6667V5.66675H2.33341ZM15.6667 4.00008C16.5917 4.00008 17.3334 4.74175 17.3334 5.66675V14.8334C17.3334 15.7584 16.5917 16.5001 15.6667 16.5001H2.33341C1.40841 16.5001 0.666748 15.7584 0.666748 14.8334L0.675081 5.66675C0.675081 4.74175 1.40841 4.00008 2.33341 4.00008H5.66675V2.33341C5.66675 1.40841 6.40841 0.666748 7.33342 0.666748H10.6667C11.5917 0.666748 12.3334 1.40841 12.3334 2.33341V4.00008H15.6667Z"
                  fill="black"
                />
              </svg>
              <span>Innovaccer Analytics Private Ltd.</span>
            </div>
            <LocationSVG location="Noida, India" />
          </div>
          <div className="apply-on">
            <span>Apply on Timesjobs</span>
          </div>
          <UserDetails userImg={images.Joseph} user={"Joseph Gray"} />
        </div>
      </SArticleCard>
    </SArticlePosts>
  );
};

export default ArticlePosts;
