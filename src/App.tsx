import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ArticleSection from "./Components/Articles/ArticlesSection";
import { LoginContext } from "./Context/LoginContext";
import { LoginStatus, UserInfo } from "./types";
import { useEffect, useState } from "react";

function App() {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>({
    isLoggedIn: false,
    picture: "",
    name: "",
  });
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decoded: UserInfo = JSON.parse(atob(accessToken?.split(".")[1]));
      if (!(decoded.exp * 1000 > Date.now())) {
        localStorage.removeItem("accessToken");
        return;
      }
      setLoginStatus({
        isLoggedIn: true,
        picture: decoded.picture,
        name: decoded.name || decoded.email,
      });
    }
  }, [setLoginStatus]);
  return (
    <>
      <LoginContext.Provider value={loginStatus}>
        <Navbar />
        <Header />
        <ArticleSection />
      </LoginContext.Provider>
    </>
  );
}

export default App;
