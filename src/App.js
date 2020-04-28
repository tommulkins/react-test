import React from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="content">
      <div className="content-inside">
        <header className="header">
          <h1>Mad Mobile Contact Manager</h1>
        </header>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search">
            <h2>Search</h2>
            <input
              id="search"
              type="text"
              placeholder="Who are you looking for?"
              className="search-bar"
              autoComplete="off"
            />
          </label>
          <label htmlFor="sort">
            <h2>Sort by</h2>
            <select id="sort" className="sort-by">
              <option>Firstname</option>
              <option>Lastname</option>
            </select>
          </label>
        </form>

        <hr />

        <main>
          <div className="card">
            <div className="card-header">
              <FontAwesomeIcon
                icon={faUserEdit}
                size="lg"
                className="card-icon"
              />
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
        </main>
      </div>

      <footer className="footer">
        <span role="img" aria-label="worker">
          👷‍♂️
        </span>
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/tom-mulkins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tom Mulkins
        </a>
      </footer>
    </div>
  );
};

render(<App />, document.getElementById("root"));
