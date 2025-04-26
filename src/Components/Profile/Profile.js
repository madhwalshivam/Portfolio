import React from "react";
import profile from "../../Assets/profile.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const Profile = () => {
  return (
      <div className="leftprofile">
        <img className="profileimg" src={profile} alt="profile" />
        <div className="sociallink">
  <a href="https://www.instagram.com/shiv.am0208/" target="_blank" rel="noopener noreferrer">
    <InstagramIcon sx={{ fontSize: "40px" }} className="instagram" />
  </a>

  <a href="https://github.com/madhwalshivam" target="_blank" rel="noopener noreferrer">
    <GitHubIcon sx={{ fontSize: "40px" }} className="instagram" />
  </a>

  <a href="https://www.linkedin.com/in/shivam-madhwal-b094842b7/" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon sx={{ fontSize: "40px" }} className="instagram" />
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
