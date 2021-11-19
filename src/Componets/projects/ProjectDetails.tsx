import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails(props: any) {
  const params = useParams();
  console.log(params);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {params.id}</span>
          <p> Lorem</p>
        </div>
        <div className="card-action grey-lighten-4 grey-text">
          <div> Posted By Brendan</div>
          <div> Today</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
