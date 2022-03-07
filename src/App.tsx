import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UniqueUser from "./UniqueUser";
import Edit from "./Edit";

function App() {
  const [data, setData] = useState({} as User);
  const [currentUser, currentUserSetData] = useState({} as User);
  const userID = useState([8]);

  const getData = () => {
    fetch("./people.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setData(myJson);
        currentUserSetData(myJson[userID[0][0]]);
      });
  };

  const getUserName = (id) => {
    console.log("Spouse ID: " + id);
    console.log(data[id]);
  };

  useEffect(() => {
    getData();
  }, []);

  type User = {
    name?: string;
    id?: string;
    born?: string;
    hometown?: string;
    parentId1?: number;
    parentId2?: number;
    spouseId?: number;
  };

  return (
    <div className="App">
      <main>
        {[currentUser].map((user) => (
          <>
            <h1>{user.name}</h1>
            <p>Date of Birth: {user.born}</p>
            <p>Place of Birth: {user.hometown}</p>
            <p>Spouse: {getUserName(user.spouseId)}</p>
            <p>
              Parents: {user.parentId1}, {user.parentId2}
            </p>
          </>
        ))}

        <Router>
          <Link to="/user">user</Link>
          <Routes>
            <Route path="/User" element={<UniqueUser userId={3} />} />
            <Route path="/Edit" element={<Edit userId={3} />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
