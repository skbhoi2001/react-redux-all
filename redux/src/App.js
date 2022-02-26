import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";

export default function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isUserLoggedIn) {
      // console.log(pathname);
      if (pathname === "/login") navigate("/");
      else navigate(pathname);
    } else {
      navigate("/login");
    }
  }, [navigate, isUserLoggedIn, pathname]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

//1.05
