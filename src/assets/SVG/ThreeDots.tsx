import { useState } from "react";
import { styled } from "styled-components";
interface SDotsWrapperProps {
  active: boolean;
}
const SDotWrapper = styled.div<SDotsWrapperProps>`
  width: 36px;
  height: 32px;
  display: flex;
  justify-content: center;
  padding: 13px 8px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 4px;
  position: relative;
  background-color: ${(props) => (props.active ? "#bfc0c0" : "transparent")};
  &:hover {
    background: #bfc0c0;
  }
`;
const ExtraControls = styled.div`
  width: 160px;
  height: 102px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  position: absolute;
  top: 35px;
  right: 0;
  ul {
    padding: 11px 12px;
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin: 0;
  }
`;
const ThreeDots = () => {
  const [controls, setControls] = useState<boolean>(false);

  return (
    <SDotWrapper
      id="extra-controls"
      className="clickable"
      active={controls}
      onClick={() => setControls((prev) => !prev)}
    >
      <svg
        width="20"
        height="6"
        viewBox="0 0 20 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
          fill="black"
        />
      </svg>
      {controls && (
        <ExtraControls>
          <ul>
            <li>Edit</li>
            <li>Report</li>
            <li>Option 3</li>
          </ul>
        </ExtraControls>
      )}
    </SDotWrapper>
  );
};

export default ThreeDots;
