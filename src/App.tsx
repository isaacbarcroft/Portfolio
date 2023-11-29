import React, { useState, useEffect } from "react";
import "./fonts/BroadwayD.ttf";
import "./App.css";
import headshot from "./images/headshot.jpg";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate the end of loading after a certain time (you can replace this with your actual loading logic)
    }, 1500); // Change the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        {loading ? (
          <p
            className="shimmer-loader"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "BroadwayD",
              color: "##F990E8",
            }}
          >
            Isaac Barcroft's Portfolio
          </p>
        ) : (
          <>
            <img
              src="src/assets/headshot.jpg"
              className="App-logo"
              alt="logo"
              style={{ borderRadius: "50%" }}
            />
            <div
              data-content="Isaac Barcroft"
              className="shimmer-effect"
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                fontFamily: "BroadwayD",
                color: "##F990E8",
              }}
            >
              Isaac Barcroft
            </div>
            <div
              className="shimmer-effect"
              style={{
                color: "##F990E8",
                fontStyle: "italic",
                fontFamily: "BroadwayD",
              }}
            >
              Software Engineer
            </div>
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
