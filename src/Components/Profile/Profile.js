import React from "react";
import profile from "../../Assets/profile.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Profile = () => {
  return (
      <div className="leftprofile">
        <img className="profileimg" src={profile} alt="profile" />
        <div className="sociallink">
          <InstagramIcon sx={{ fontSize: "40px" }} className="instagram" />
          <TwitterIcon sx={{ fontSize: "40px" }} className="instagram" />
          <XIcon sx={{ fontSize: "40px" }} className="instagram" />
          <YouTubeIcon sx={{ fontSize: "40px" }} className="instagram" />
        </div>
        <div className="hiremebtn">HIRE ME</div>
      </div>
    
  );
};

export default Profile;
