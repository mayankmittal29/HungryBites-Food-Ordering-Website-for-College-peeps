import React from "react";
import { FaLinkedin } from "react-icons/fa";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">Copyright © {currentYear} HungryBites. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
