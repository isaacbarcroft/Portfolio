import React from "react";

const Loader = () => {
  return (
    <>
      <div
        className="background-80s animated-clouds stars"
        style={{ backgroundSize: "100vh", fontSize: "3vw" }}
      >
        <div className="sun"></div>
        <div className="grid"></div>
        <div className="mountain mountain1"></div>
        <div className="mountain mountain2"></div>
        <div className="mountain mountain3"></div>
        <div className="mountain mountain4"></div>
        <div className="mountain mountain5"></div>
        <div className="mountain mountain6"></div>
        <div className="mountain mountain7"></div>
        <div className="mountain mountain8"></div>
        <div className="mountain mountain9"></div>
        <div className="mountain mountainTen"></div>
        <div className="mountain mountainEleven"></div>
        <div className="mountain mountainTwelve"></div>

        <div className="road-off"></div>
        <div className="overlay"></div>

        <div className="text">
          <div className="outrun glow">Software Engineer</div>

          <div className="chrome shine" data-text="ISAAC">
            ISAAC
          </div>
          <div className="chrome shine" data-text="BARCROFT">
            BARCROFT<span className="spark spark-offset"></span>
          </div>
        </div>
      </div>
      <svg width="0" height="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
            id="fractalNoise"
          />
          <feDisplacementMap
            id="displacementMap"
            in="SourceGraphic"
            scale="120"
          />
        </filter>
        <animate
          xlinkHref="#displacementMap"
          id="animclouds1"
          begin="0; animclouds2.end"
          attributeName="scale"
          from="50"
          to="180"
          dur="3s"
          fill="freeze"
        />
        <animate
          xlinkHref="#displacementMap"
          id="animclouds2"
          begin="animclouds1.end"
          attributeName="scale"
          from="180"
          to="50"
          dur="3s"
          fill="freeze"
        />
        <animate
          xlinkHref="#fractalNoise"
          id="animclouds3"
          begin="0;animclouds4.end"
          attributeName="baseFrequency"
          from="0.03"
          to="0.01"
          dur="30s"
          fill="freeze"
        />
        <animate
          xlinkHref="#fractalNoise"
          id="animclouds4"
          begin="animclouds3.end"
          attributeName="baseFrequency"
          from="0.01"
          to="0.03"
          dur="30s"
          fill="freeze"
        />
      </svg>
    </>
  );
};

export default Loader;
