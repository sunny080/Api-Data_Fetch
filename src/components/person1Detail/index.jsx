import React, { Component, useEffect, useState } from "react";
import "./tabledata.css";
function User1() {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [single, setSingle] = useState([]);
  const [active, setActive] = useState(true);
  const [query, setQuery] = useState("");

  console.log(query);

  const ToggleActive = (active) => {
    setActive(!active);
  };
  console.log(users);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUser();
  }, []);

  function myFunc(e) {
    const userdata = users.filter((val) => val.id === e);
    console.log(userdata);
    setSingle(userdata);
    ToggleActive();
  }

  return (
    <>
      <input
        type="text"
        placeholder="seacrh"
        className="seacrhbox"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="container">
        <thead>
          <tr>
            <th>No's</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>View Detail</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.name.toLowerCase().includes(query))
            .map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <button onClick={() => myFunc(user.id)}>View All</button>
                </tr>
              );
            })}
        </tbody>
      </table>
      {single.map((user) => {
        return (
          <div className={active ? "temp" : "cloing"}>
            <table className="lineer">
              <thead className="hoi">
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Username</td>
                  <td>Email</td>
                  <td>Address</td>
                  <td>Phone</td>
                  <td>Website</td>
                  <td>Company Name</td>
                </tr>
              </thead>
              <tbody>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{`${user.address.street}, ${user.address.city}`}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              </tbody>
            </table>
            <button
              className={active ? "close" : "sample"}
              onClick={() => ToggleActive(active)}
            >
              close
            </button>
          </div>
        );
      })}
    </>
  );
}

export default User1;
