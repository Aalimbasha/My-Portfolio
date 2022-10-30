import React, { useState ,useEffect} from "react";
import "../css/Form.css";
import { useNavigate } from "react-router-dom";
// import hand from "../images/hand.gif";
import Button from "react-bootstrap/Button";


export default function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    return () => {
     const validation = JSON.parse(localStorage.getItem("info"));
     setValid(validation);
    };
  });
  localStorage.setItem(
    "info",
    JSON.stringify([
      { email: "aalim", password: "25" },
      { email: "ajju", password: "12" },
    ])
  );

  const submitHandler = (e) => {
    e.preventDefault();
    // const data = {
    //   email,
    //   password,
    // };

    
    debugger;
    const validate = valid.findIndex(
      (item) => item.email === email && item.password === password
    );

    if (validate > -1)navigate("/intro");
    else  alert("sry");
  };

  return (
    <div className="form-bg">
      <div className="title">login</div>
      <div className="showedpwd">
        <p>UserName : aalim</p>
        <p>password : 25</p>
      </div>
    
      <div className="forms">
        <form onSubmit={submitHandler}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
