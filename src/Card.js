import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={faUserEdit} size="lg" className="card-icon" />
        <div className="card-name">Contact Name</div>
      </div>

      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQEsP0RffvxWKA/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=KUpFO5kY1Jb8CwxR_qAFJ9xOod08xsGFgxs8Z2vXybw"
        height="130"
        width="130"
        alt="Profile"
        className="card-image"
      />

      <div className="card-body">
        <div className="card-details">
          Email
          <br />
          Phone
          <br />
          Location
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
