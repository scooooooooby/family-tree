import React, { useEffect } from "react";
import "./App.css";

function App() {
  const getData = () => {
    fetch("./people.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (myJson) {
        console.log(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Person Name</h1>
        <p>DOB: DOB</p>
        <p>Place of Birth: POB</p>
        <p>Children: children</p>
        <p>Spouse: spouse</p>
        <p>Parents: parents</p>
      </main>
    </div>
  );
}

export default App;
