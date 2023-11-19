import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/reducers/adminAuthReducer";
// import { login } from "../../../redux/reducers/userSlice";
import { Form, Button } from "react-bootstrap";
import loginUserOnServer from "./loginUserOnServer";
import HeadLine from "../../shared/Headline";
import "./Login.css";

const Login = ({ setLogin }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    loginAs: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  //   handle on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   clear fields
  const clearField = () => {
    setFormData({
      username: "",
      password: "",
      loginAs: "",
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, loginAs } = formData;

    if (loginAs === "staff") {
      const response = await loginUserOnServer(username, password);
      if (response.success) {
        clearField();
        // Dispatch the login action with the user data.
        dispatch(loginUser(response));
        setLogin(true);
      } else {
        // Handle login failure.
        setErrorMessage("Invalid username or password");
      }
    } else if (loginAs === "customer") {
      console.log("customer login");
    }
  };

  return (
    <div className="LogContainer">
      <div>
        <HeadLine text="Login to your Dashboard" />
        <p className="Error">{errorMessage}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-4">
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <p className="asText">Login as:</p>
            <div className="asBox">
              <div>
                <input
                  type="radio"
                  name="loginAs"
                  className="radio"
                  value="staff"
                  onChange={handleChange}
                />
                <label className="Remember">Staff </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="loginAs"
                  className="radio"
                  value="customer"
                  onChange={handleChange}
                />
                <label className="Remember">Customer </label>
              </div>
            </div>
          </Form.Group>

          <Button type="submit" className="LoginBtn">
            Login
          </Button>
        </Form>
        <p className="Forget">Forget Password</p>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLogin: PropTypes.func,
};

export default Login;
