import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./fonts/BroadwayD.ttf";
import "./App.css";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Uled from "./components/ULED";
import Nicer from "./components/Nicer";
import MyWell from "./components/MyWell";
import Greeting from "./components/Greeting";
import Instructor from "./components/Teaching";

const App = () => {
  const location = useLocation();
  console.log({ location });
  const [loading, setLoading] = useState(true);

  const root = location.pathname === "/";
  const uled = location.pathname === "/uled";
  const agriculture = location.pathname === "/agriculture";
  const mywell = location.pathname === "/mywell";
  const resume = location.pathname === "/resume";
  const teaching = location.pathname === "/teaching";
  console.log({ resume });
  useEffect(() => {
    if (resume) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (resume && !loading) {
    return (
      <div className="Resume">
        <iframe
          src={require("/Users/isaacbarcroft/Documents/Portfolio/Portfolio/src/assets/files/resume.pdf")}
        ></iframe>
      </div>
    );
  }

  if (loading)
    return (
      <div className="Loading">
        <div
          className="shimmer-loader"
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            fontFamily: "BroadwayD",
          }}
        >
          <span className="loading-text">Isaac Barcroft's Portfolio</span>
        </div>
      </div>
    );
  return (
    <div className="App">
      <div className="App-header">
        <Header />

        <div className="content-Container ">
          {root && <Greeting />}
          {mywell && <MyWell />}
          {uled && <Uled />}
          {agriculture && <Nicer />}
          {teaching && <Instructor />}
          <div className="works">
            <div
              style={{
                fontFamily: "BroadwayD",
                fontWeight: "bold",
                fontSize: "2rem",
                marginBottom: 8,
              }}
            >
              Experience
            </div>

            <Link to="/teaching" className="link">
              <div>
                <span className="works-links">- Instructor</span>
              </div>
            </Link>
            <Link to="/mywell" className="link">
              <div>
                <span className="works-links">- My Well</span>
              </div>
            </Link>
            <Link to="/uled" className="link">
              <div>
                <span className="works-links">- Universal Ledger</span>
              </div>
            </Link>
            <Link to="/agriculture" className="link">
              <div style={{ textAlignLast: "center" }}>
                <span className="works-links">
                  - Agricultural Sales Application
                </span>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
