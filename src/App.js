import React, { useState } from "react";
import { render } from "react-dom";
import Card from "./Card";

const App = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Lastname");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      });
  };

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
          <div className="cards">{<Card />}</div>
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
