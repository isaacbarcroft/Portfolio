import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const EmailIcon: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const showPopup = () => {
    setPopupVisible(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("isaacbarcroft@gmail.com");
    setPopupVisible(false);
  };
  const openEmailApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add logic to open the default email app here
    setPopupVisible(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    const clickedElement = event.target as Node;

    if (
      popupRef.current &&
      !popupRef.current.contains(clickedElement) &&
      !(clickedElement as Element).closest(".anchor-link")
    ) {
      setPopupVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      onClick={() => showPopup()}
      className="anchor-link"
      style={{ position: "relative", width: "32px", height: "32px" }}
    >
      <svg
        viewBox="0 0 24 24"
        width="32px"
        height="32px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path
          d="M12.69,12.06a1,1,0,0,1-1.34,0L2.87,4.35A2,2,0,0,1,4,4H20a2,2,0,0,1,1.13.35Z"
          fill="#0bd2d3"
        />
        <path
          d="M22,6.26V17a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V6.26l8.68,7.92a2,2,0,0,0,1.32.49,2,2,0,0,0,1.33-.51Z"
          fill="#0bd2d3"
        />
      </svg>
      {popupVisible && (
        <div className="popup" ref={popupRef}>
          <div
            style={{ color: "#ff6ec7" }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard();
            }}
          >
            Copy Email to Clipboard
          </div>
          <a
            onClick={(e) => e.stopPropagation()}
            href="mailto:isaacbarcroft@gmail.com"
            style={{ textDecoration: "none", color: "#ff6ec7" }}
          >
            <div onClick={(e) => openEmailApp(e)}>Open Email App</div>
          </a>
        </div>
      )}
    </div>
  );
};

export default EmailIcon;
