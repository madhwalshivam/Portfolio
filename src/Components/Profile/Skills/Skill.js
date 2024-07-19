import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="skillcomp">
      {skill?.map((item, index) => {
        return (
          <div className="skillcard">
            <div className="classtitle">{item.skillName}</div>
            <div className="skilltechnology">
              {item?.skill?.map((it, ind) => {
                return <div className="skilltechname">{it}</div>;
              })
       }
  
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
