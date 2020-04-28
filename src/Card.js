import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Card = ({ position, contact }) => {
  const [showModal, setShowModal] = useState(false);
  const [newContact, setNewContact] = useState({ ...contact });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setNewContact(() => {
      return { ...contact };
    });
  }, [contact]);

  return (
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon
          icon={faUserEdit}
          size="lg"
          className="card-icon"
          onClick={toggleModal}
        />
        <div className="card-name">{`${contact.name.first} ${contact.name.last}`}</div>
      </div>

      <img
        src={contact.picture.large}
        height="130"
        width="130"
        alt="Profile"
        className="card-image"
      />

      <div className="card-body">
        <div className="card-details">
          {contact.email}
          <br />
          {contact.phone}
          <br />
          {`${contact.location.city}, ${contact.location.state}`}
          <br />
        </div>
      </div>
      {showModal ? (
        <Modal>
          <div>
            <h1>
              Editing #{position} - {contact.name.first} {contact.name.last}
            </h1>
            <form action="" onSubmit={(e) => e.preventDefault()}>
              First Name
              <br />
              <input
                type="text"
                value={newContact.name.first}
                onChange={(e) =>
                  setNewContact({ name: { first: e.target.value.trim() } })
                }
              />
              <br />
              Last Name
              <br />
              <input
                type="text"
                value={newContact.name.last}
                onChange={(e) =>
                  setNewContact({ name: { last: e.target.value.trim() } })
                }
              />
              <br />
              Email
              <br />
              <input
                type="text"
                value={newContact.email}
                onChange={(e) =>
                  setNewContact({ email: e.target.value.trim() })
                }
              />
              <br />
              Phone
              <br />
              <input
                type="text"
                value={newContact.phone}
                onChange={(e) =>
                  setNewContact({ phone: e.target.value.trim() })
                }
              />
              <br />
              City
              <br />
              <input
                type="text"
                value={newContact.location.city}
                onChange={(e) =>
                  setNewContact({ location: { city: e.target.value.trim() } })
                }
              />
              <br />
              State
              <br />
              <input
                type="text"
                value={newContact.location.state}
                onChange={(e) =>
                  setNewContact({ location: { state: e.target.value.trim() } })
                }
              />
            </form>
            <div className="buttons">
              <button type="submit">Save</button>
              <button
                type="button"
                style={{ backgroundColor: "#ccc", color: "#000" }}
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
