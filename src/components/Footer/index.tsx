import React from "react";
import GithubIcon from "../../images/github";
import LinkedInIcon from "../../images/linkedIn";
import EmailIcon from "../../images/email";
import ResumeIcon from "../../images/resume";

const Footer: React.FC = () => {
  return (
    <div className="icon-container">
      <GithubIcon />
      <LinkedInIcon />
      <EmailIcon />
      <ResumeIcon />
    </div>
  );
};

export default Footer;
