import React from "react";
import profile from "../../Assets/profile.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from '@mui/icons-material/Facebook';


const Profile = () => {
  return (
      <div className="leftprofile">
        <img className="profileimg" src={profile} alt="profile" />
        <div className="sociallink">
  <a href="https://www.instagram.com/shiv.am0208/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon sx={{ fontSize: "40px" }} className="instagram" />
  </a>

  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
    <TwitterIcon sx={{ fontSize: "40px" }} className="instagram" />
  </a>

  <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
    <XIcon sx={{ fontSize: "40px" }} className="instagram" />
  </a>

  <a href="https://www.facebook.com/shivamsingh.shibhu" target="_blank" rel="noopener noreferrer">
    <FacebookIcon  sx={{ fontSize: "40px" }} className="instagram" />
  </a>
</div>

        <div className="hiremebtn">HIRE ME</div>
      </div>
    
  );
};

export default Profile;
