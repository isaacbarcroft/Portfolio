import React, { useState, useEffect } from "react";
import "./fonts/BroadwayD.ttf";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showMainApp, setShowMainApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowMainApp(true);
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
        <Header setShowMainApp={setShowMainApp} />
        <div className="content-Container ">
          {showMainApp && <Greeting />}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "40%",
            }}
          >
            <div
              style={{
                fontFamily: "BroadwayD",
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: 8,
              }}
              onClick={() => setShowMainApp(false)}
            >
              My Work
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
