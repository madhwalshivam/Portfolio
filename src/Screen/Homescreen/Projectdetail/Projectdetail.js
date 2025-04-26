import React, { useState, useEffect } from "react";
import "./Projectdetail.css";
import Profile from "../../../Components/Profile/Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Contact from "../../../Components/Profile/Contact/Contact";
import projectData from "../../../project.json";
import { useParams, useNavigate,Link} from "react-router-dom";
import Skill from "../../../Components/Profile/Skills/Skill";

const Projectdetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState(null);
  useEffect(() => {
    if (/^\d+$/.test(id) && id >= 0 && id < projectData?.projects.length) {
      setdata(projectData.projects[id]);
    } else {
      navigate("/");
    }
  });
  return (
    <div className="projectdetailpage">
      <div className="leftsideprojectdetail">
        <Profile />
      </div>
      <div className="rigthsideprojectdetails">
        <div className="projectdetailrightside">
          <Link to ={'/'} className="backtohome">
            <ArrowBackIcon /> Back To Home
          </Link>

          <div className="titleportfolio">Project</div>
          <div className="homebrefintro">
            <span className="hello">{data?.name.split(" ")[0]}</span>{" "}
            {data?.name
              .split(" ")
              .slice(1, data?.name.length - 1)
              .join(" ")}
          </div>
          <div className="content">{data?.desc}</div>
          <div className="projectimgdetail">
            <img src={data?.mainImg} className="projectimg" />
            <div className="projectlink">
              <span className="projectinkgrey"></span>
              {data?.projectLink}

            </div>
            <div className="educationblock">
              <div className="educationtitle">Technology</div>
              <div className="educationcontentdesc">
                <span className="education">Project</span> Technology Used
              </div>
              <Skill skill={data?.technology} />
              <div className="questionblock">
                <div className="titleportfolio">Difficulties</div>
                <div className="homebrefintro">
                  What Difficulty Faced and how solved???
                </div>
                <div className="content">{data?.difficulties?.desc}</div>
              </div>
              <div className="questionblock">
                <div className="titleportfolio">Learn</div>
                <div className="homebrefintro">
                  What new things you learned???
                </div>
                <div className="content">{data?.learn?.desc}</div>
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projectdetail;
