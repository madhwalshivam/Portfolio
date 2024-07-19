import React, { useEffect, useState } from "react";
import "./Homescreen.css";
import ProfileData from "../../profile.json";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import Contact from "../../Components/Profile/Contact/Contact";
import { Link } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";
import Skill from "../../Components/Profile/Skills/Skill";

const Homescreen = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(ProfileData);
  }, []);

  return (
    <div className="Homescreen">
      <div className="homeleftside">
        <Profile />
      </div>
      <div className="homerightside">
        <div className="homeintro">
          <div className="titleportfolio">Portfolio</div>
          <div className="homebrefintro">
            <span className="hello">Hello</span>,{data?.pageTitle}
          </div>
          <div className="content">
            {data?.description}
            <div className="homeintroiconsdetail">
              <div className="homeiconsdetailblock">
                <LocationOnIcon
                  className="locationicon"
                  sx={{ fontSize: "40px" }}
                />
                <div className="locationblock">{data?.location}</div>
              </div>
              <div className="homeiconsdetailblock">
                <PhoneInTalkIcon
                  className="locationicon"
                  sx={{ fontSize: "40px" }}
                />
                <div className="locationblock">{data?.phone}</div>
              </div>
              <div className="homeiconsdetailblock">
                <EmailIcon className="locationicon" sx={{ fontSize: "40px" }} />
                <div className="locationblock">{data?.mail}</div>
              </div>
            </div>
            <div className="homecountblock">
              <div className="blockdivhome">
                <div className="numberhomepage">{data?.yearOfExp}</div>
                <div className="experiencedetail"> Year Of Experience</div>
              </div>
              <div className="blockdivhome">
                <div className="numberhomepage">{data?.projects}</div>
                <div className="experiencedetail">Completed Projects</div>
              </div>
              <div className="blockdivhome">
                <div className="numberhomepage">{data?.leetcodeRating}</div>
                <div className="experiencedetail">Rating in leetcode</div>
              </div>
            </div>
          </div>
          <div className="educationblock">
            <div className="educationtitle">CAREER</div>
            <div className="educationcontentdesc">
              <span className="education">Education</span> & Experience
            </div>
            {data?.career?.map((item, index) => {
              return (
                <div className="educationdetail">
                  <div className="coursemonth">{item?.interval}</div>
                  <div className="coursename">{item?.role}</div>
                </div>
              );
            })}
          </div>

          <div className="educationblock">
            <div className="educationtitle">SKILLS</div>
            <div className="educationcontentdesc">
              <span className="education">My</span> Skills & Knowledge
              Experience
            </div>
            <Skill skill={data?.skills}/>
            <div className="educationblock">
              <div className="educationtitle">WORK</div>
              <div className="educationcontentdesc">Featured Projects</div>
              {data?.project?.map((item, index) => {
                return (
                  <Link to={`/project/${index}`} className="imageblock">
                    <img src={item?.imageLink} className="netflix" alt="netflix" />
                    <div className="projectnamehome">{item?.name}</div>
                  </Link>
                );
              })}
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
