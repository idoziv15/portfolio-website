import React from "react";

interface WaveProps {
  className?: string;
}

const Wave: React.FC<WaveProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320">
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M0,64L40,101.3C80,139,160,213,240,229.3C320,245,400,203,480,181.3C560,160,640,160,720,160C800,160,880,160,960,176C1040,192,1120,224,1200,234.7C1280,245,1360,235,1400,229.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
  </svg>
);

export default Wave;
