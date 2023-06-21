import images from "../../Constants/images";
import SRecGroups from "./RecommendedGroups.styles";

const RecommendedGroups = () => {
  const dummy_data = [
    {
      id: 1,
      img: images.group1,
      title: "Leisure",
    },
    {
      id: 2,
      img: images.group2,
      title: "Activism",
    },
    {
      id: 3,
      img: images.group3,
      title: "MBA",
    },
    {
      id: 4,
      img: images.group4,
      title: "Philosophy",
    },
  ];
  return (
    <SRecGroups>
      <div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_1263)">
            <path
              opacity="0.3"
              d="M15.75 9V7.5H9L10.005 3.495L6.75 6.75V14.25H13.5L15.75 9Z"
              fill="black"
            />
            <path
              d="M6.75 15.75H13.5C14.1225 15.75 14.655 15.375 14.88 14.835L17.145 9.5475C17.2125 9.375 17.25 9.195 17.25 9V7.5C17.25 6.675 16.575 6 15.75 6H11.0175L11.73 2.5725L11.7525 2.3325C11.7525 2.025 11.625 1.74 11.4225 1.5375L10.6275 0.75L5.685 5.6925C5.415 5.9625 5.25 6.3375 5.25 6.75V14.25C5.25 15.075 5.925 15.75 6.75 15.75ZM6.75 6.75L10.005 3.495L9 7.5H15.75V9L13.5 14.25H6.75V6.75ZM0.75 6.75H3.75V15.75H0.75V6.75Z"
              fill="black"
            />
          </g>
        </svg>

        <span>Recommended Groups</span>
      </div>
      <div className="card-wrapper">
        {dummy_data.map((data) => {
          return (
            <div key={data.id} className="group-card">
              <div>
                <img src={data.img} alt="grp-img" />
                <span>{data.title}</span>
              </div>
              <div>
                <span>Follow</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="see-more">
        <span className="clickable">See More...</span>
      </div>
    </SRecGroups>
  );
};

export default RecommendedGroups;
