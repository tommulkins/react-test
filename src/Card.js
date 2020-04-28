import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const Card = ({ contact, handleSubmit }) => {
  const [showModal, setShowModal] = useState(false);

  const save = (e) => {
    e.preventDefault();
    const form = Array.from(e.target);
    const value = form.reduce(
      (acc, input) => ({
        ...acc,
        [input.name]: input.value,
      }),
      {}
    );

    const newContact = {
      ...contact,
      name: {
        first: value["name.first"],
        last: value["name.last"],
      },
      email: value.email,
      phone: value.phone,
      city: value.city,
      state: value.state,
    };

    typeof handleSubmit === "function" && handleSubmit(newContact);
    toggleModal();
  };

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
              Editing {contact.name.first} {contact.name.last}
            </h1>
            <form action="" onSubmit={save}>
              First Name
              <br />
              <input
                type="text"
                name="name.first"
                defaultValue={contact.name.first}
              />
              <br />
              Last Name
              <br />
              <input
                type="text"
                name="name.last"
                defaultValue={contact.name.last}
              />
              <br />
              Email
              <br />
              <input type="text" name="email" defaultValue={contact.email} />
              <br />
              Phone
              <br />
              <input type="text" name="phone" defaultValue={contact.phone} />
              <br />
              City
              <br />
              <input
                type="text"
                defaultValue={contact.location.city}
                name="city"
              />
              <br />
              State
              <br />
              <input
                type="text"
                defaultValue={contact.location.state}
                name="state"
              />
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
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Card;
