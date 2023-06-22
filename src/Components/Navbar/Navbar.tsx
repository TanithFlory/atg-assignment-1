import { useEffect, useState, MouseEvent } from "react";
import Logo from "../../assets/SVG/Logo";
import SNavbar from "./Navbar.styles";
import Signup from "../LoginModal/Signup";
const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const body = document.querySelector("body");
  useEffect(() => {
    modal && body?.classList.add("overflow-hidden");

    return () => {
      body?.classList.remove("overflow-hidden");
    };
  }, [modal]);

  const disableModal = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | undefined
  ) => {
    const target = e?.target as HTMLElement;
    if (target.classList.contains("backdrop")) {
      setModal(false);
    }
  };
  return (
    <>
      {modal && <Signup disableModal={disableModal} />}
      <SNavbar>
        <div data-display="none">
          <Logo />
        </div>
        <div className="navbar__search-box" data-display="none">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
              fill="#7A7A7A"
            />
          </svg>
          <input placeholder="Search for your favorite groups in ATG" />
        </div>
        <div className="navbar__create-acc" data-display="none">
          <div onClick={() => setModal((prev) => !prev)}>
            <span>
              Create account. <span>It's free!</span>
            </span>
          </div>
          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
          </svg>
        </div>
        <div className="navbar-shapes">
          <div>
            <svg
              width="51"
              height="10"
              viewBox="0 0 51 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="-0.00012207" width="10" height="10" fill="#868E96" />
              <path
                d="M26 9.99988C28.7614 9.99988 31 7.7613 31 4.99988C31 2.23845 28.7614 -0.00012207 26 -0.00012207C23.2386 -0.00012207 21 2.23845 21 4.99988C21 7.7613 23.2386 9.99988 26 9.99988Z"
                fill="#868E96"
              />
              <path
                d="M39 -0.00012207H51L45 9.99988L39 -0.00012207Z"
                fill="#868E96"
              />
            </svg>
          </div>
        </div>
      </SNavbar>
    </>
  );
};

export default Navbar;
