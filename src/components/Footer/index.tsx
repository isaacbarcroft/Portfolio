import React from "react";
import GithubIcon from "../../images/github";
import LinkedInIcon from "../../images/linkedIn";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginInline: 32,
        marginBlock: 64,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
      }}
    >
      <GithubIcon />
      <LinkedInIcon />
    </div>
  );
};

export default Footer;
