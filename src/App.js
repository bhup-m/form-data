import './App.css';
import {useState} from 'react'
import axios from 'axios'

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const url = "http://localhost:5000"
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || password.length < 3) {
      alert("Enter correct values");
    } else {
      alert("Login Successful!!!");
    }
    axios.post(`${url}/`,{
      name,
      password
    })
  };

  const userHandler = (e) => {
    let item = e.target.value;

    if (item.length < 3) {
      setUserError(true);
    } else {
      setUserError(false);
    }
    setName(item);
  };

  const passwordHandler = (e) => {
    let item = e.target.value;

    if (item.length < 3) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(item);
  };
  return (
    <div className="App form">
      <form onSubmit={handleSubmit}>
        <label>Login ID : </label>
        <input
          type="text"
          value={name}
          placeholder="Enter Your ID"
          onChange={userHandler}
        ></input>
        {userError ? <span>User Not Found</span> : ""}
        <br />
        <br />
        <label>Password : </label>
        <input
          type="text"
          value={password}
          placeholder="Enter Your Password"
          onChange={passwordHandler}
        ></input>
        {passwordError ? <span>User Not Found</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
