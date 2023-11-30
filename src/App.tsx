import React, { useState, useEffect } from "react";
import "./fonts/BroadwayD.ttf";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate the end of loading after a certain time (you can replace this with your actual loading logic)
    }, 1500); // Change the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              data-content="Isaac Barcroft"
              className="shimmer-effect"
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                fontFamily: "BroadwayD",
                color: "#F990E8",
              }}
            >
              Isaac Barcroft
            </div>
            <div
              className="shimmer-effect"
              style={{
                color: "#F990E8",
                fontStyle: "italic",
                fontFamily: "BroadwayD",
              }}
            >
              Software Engineer
            </div>
          </div>
          <img
            style={{
              display: "flex",
              border: "1px #0bd2d3 solid",
              borderRadius: "50%",
              margin: 10,
              boxShadow: "0 0 10px #0bd2d3",
            }}
            src={require("/Users/isaacbarcroft/Documents/Portfolio/Portfolio/src/assets/profile.jpg")}
            className="App-logo"
            alt="head shot"
            width="150px"
            height="150px"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
