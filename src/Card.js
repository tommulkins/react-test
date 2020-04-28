import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Card = ({ position, contact }) => {
  const [showModal, setShowModal] = useState(false);

  const firstName = contact.name.first;
  const lastName = contact.name.last;
  const picture = contact.picture.large || "https://via.placeholder.com/150";
  const email = contact.email;
  const phone = contact.phone;
  const location = `${contact.location.city}, ${contact.location.state}`;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon
          icon={faUserEdit}
          size="lg"
          className="card-icon"
          onClick={toggleModal}
        />
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
      {showModal ? (
        <Modal>
          <div>
            <h1>
              Editing #{position} - {firstName} {lastName}
            </h1>
            <div className="buttons">
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
