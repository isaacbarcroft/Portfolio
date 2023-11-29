import React from "react";

const LinkedInIcon: React.FC = () => {
  return (
    <div className="icon-container anchor-link">
      <a
        href="https://www.linkedin.com/in/isaac-barcroft/"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          enable-background="new 0 0 512 512"
          height="32px"
          width="32 px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              clip-rule="evenodd"
              d="M256.23,512C396.81,512,512,396.81,512,256.23   C512,115.184,396.81,0,256.23,0C115.184,0,0,115.184,0,256.23C0,396.81,115.184,512,256.23,512L256.23,512z"
              fill="#ff6ec7"
              fill-rule="evenodd"
            />
            <path
              clip-rule="evenodd"
              d="M175.958,399.98h-48.073V175.958h48.073V399.98z M329.238,175.958   c42.621,0,70.742,24.935,70.742,80.272v143.75h-48.072V272.088c0-30.832-11.327-48.064-37.637-48.064s-58.041,22.224-58.041,48.064   V399.98H208.15V175.958h48.081v32.192C272.088,191.823,295.68,175.958,329.238,175.958L329.238,175.958z M151.922,79.812   c17.686,0,32.199,14.514,32.199,32.2s-14.514,31.747-32.199,31.747c-17.686,0-32.2-14.061-32.2-31.747   S134.236,79.812,151.922,79.812L151.922,79.812z"
              fill="#282c34"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </a>
    </div>
  );
};

export default LinkedInIcon;
