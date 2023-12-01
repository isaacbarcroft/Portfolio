import React from "react";
import GithubIcon from "../../images/github";
import LinkedInIcon from "../../images/linkedIn";
import EmailIcon from "../../images/email";
import ResumeIcon from "../../images/resume";

const Footer: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        marginInline: 32,
        marginBlock: 32,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
      }}
    >
      <GithubIcon />
      <LinkedInIcon />
      <EmailIcon />
      <ResumeIcon />
    </div>
  );
};

export default Footer;
