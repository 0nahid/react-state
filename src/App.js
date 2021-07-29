import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data))
  );
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h3> Dynamic Data {user.length} </h3>
      {user.map((user) => (
        <div className="counterBtn">
          <h1>Name: {user.name}</h1>
          <h4>Mail :{user.email}</h4>
          <h4>Phone: {user.phone}</h4>
          <h5>
            {" "}
            Address :{" "}
            {`City :${user.address.city} , Street :${user.address.street} `}{" "}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default App;