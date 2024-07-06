import React from "react";
import FacebookOutLinedIcon from "@mui/icons-material/FacebookOutlined"; import InstagramIcon from "@mui/icons-material/Instagram"; import YoutubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"
function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="fooer_icons">
          <FacebookOutLinedIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of user</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="coppy_write">
          &copy;1997-2004 Netflix,Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
