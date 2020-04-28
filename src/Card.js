import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Card = ({ position, contact }) => {
  const firstName = contact.name.first;
  const lastName = contact.name.last;
  const picture = contact.picture.large || "https://via.placeholder.com/150";
  const email = contact.email;
  const phone = contact.phone;
  const location = `${contact.location.city}, ${contact.location.state}`;

  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={faUserEdit} size="lg" className="card-icon" />
        <div className="card-name">{`${firstName} ${lastName}`}</div>
      </div>

      <img
        src={picture}
        height="130"
        width="130"
        alt="Profile"
        className="card-image"
      />

      <div className="card-body">
        <div className="card-details">
          {email}
          <br />
          {phone}
          <br />
          {location}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Card;
