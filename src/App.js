import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Card from "./Card";

const App = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Lastname");
  const [contacts, setContacts] = useState([]);
  const sortArray = (sortBy) => {
    const sortedContacts = (contacts) =>
      [...contacts].sort((a, b) => {
        const sortKey = sortBy === "Firstname" ? "first" : "last";
        const nameA = a.name[sortKey].toUpperCase();
        const nameB = b.name[sortKey].toUpperCase();
        if (nameA < nameB) return -1;
        return 0;
      });

    setContacts((curContacts) => {
      const c = sortedContacts(curContacts);
      return c;
    });
  };

  /* Attempt to load 25 random contacts */
  useEffect(() => {
    (async () => {
      const url = "https://randomuser.me/api/?nat=us&results=25";
      const response = await fetch(url);
      const data = response.ok && response.json ? await response.json() : [];
      /* Initial sort is by last name */
      const sortedContacts = [...data.results].sort((a, b) => {
        const nameA = a.name.last.toUpperCase();
        const nameB = b.name.last.toUpperCase();
        if (nameA < nameB) return -1;
        return 0;
      });

      setContacts(sortedContacts);
    })();
  }, []);

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
              value={search}
              placeholder="Who are you looking for?"
              className="search-bar"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <label htmlFor="sort">
            <h2>Sort by</h2>
            {/* eslint-disable-next-line */}
            <select
              id="sort"
              className="sort-by"
              value={sortBy}
              onChange={(e) => {
                const value = e.target.value;
                setSortBy(() => {
                  sortArray(value);
                  return value;
                });
              }}
            >
              <option value="Firstname">Firstname</option>
              <option value="Lastname">Lastname</option>
            </select>
          </label>
        </form>

        <hr />

        <main>
          <div className="cards">
            {contacts
              .filter((contact) => {
                const fullName = contact.name.first.concat(
                  " ",
                  contact.name.last
                );
                if (
                  search.trim() &&
                  ~fullName.toUpperCase().indexOf(search.toUpperCase())
                ) {
                  return contact;
                } else if (!search.trim()) {
                  return contact;
                }
              })
              .map((contact, index) => (
                <Card key={index} contact={contact} position={index} />
              ))}
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
