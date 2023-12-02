import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./fonts/BroadwayD.ttf";
import "./App.css";
import { Document, Page } from "react-pdf";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import "./assets/resume.pdf";
import Header from "./components/Header";
import Uled from "./components/ULED";
import Nicer from "./components/Nicer";
import MyWell from "./components/MyWell";
import Greeting from "./components/Greeting";

const App = () => {
  const location = useLocation();
  console.log({ location });
  const [loading, setLoading] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const root = location.pathname === "/";
  const uled = location.pathname === "/uled";
  const agriculture = location.pathname === "/agriculture";
  const mywell = location.pathname === "/mywell";
  console.log({ root });
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="Loading">
        <p
          className="shimmer-loader"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            fontFamily: "BroadwayD",
            color: "#F990E8",
          }}
        >
          Isaac Barcroft's Portfolio
        </p>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <Link to="/" className="link">
              <div
                style={{
                  fontFamily: "BroadwayD",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  marginBottom: 8,
                }}
              >
                My Work
              </div>
            </Link>
            <Link to="/mywell" className="link">
              <div>My Well</div>
            </Link>
            <Link to="/uled" className="link">
              <div>Universal Ledger</div>
            </Link>
            <Link to="/agriculture" className="link">
              <div>Agricultural Sales Application</div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
