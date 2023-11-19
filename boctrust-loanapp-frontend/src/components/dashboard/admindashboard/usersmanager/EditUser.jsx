/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdmins } from "../../../../redux/reducers/adminUserReducer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditUser = (props) => {
  const dispatch = useDispatch();
  const user = props.userobj;

  // form state
  const [editFullName, setEditFullName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editUsername, setEditUsername] = useState(""); 
  const [editPassword, setEditPassword] = useState("");
  const [editUserType, setEditUserType] = useState("");
  const [editJobRole, setEditJobRole] = useState("");

  // pass object data to form
  const updateFormObject = () => {
    setEditFullName(user.fullName);
    setEditEmail(user.email);
    setEditPhone(user.phone);
    setEditUsername(user.username);
    setEditUserType(user.userType);
    setEditJobRole(user.jobRole);
  };

  useEffect(() => {
    updateFormObject();
  }, [user]);

  // clear form fields
  const clearForm = () => {
    setEditFullName("");
    setEditEmail("");
    setEditPhone("");
    setEditUsername("");
    setEditPassword("");
    setEditUserType("");
    setEditJobRole("");
    dispatch(fetchAdmins());
  };

  // close model box
  const handleClose = () => {
    props.onHide();
    clearForm();
  };

  // submit update to api endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

      const apiUrl = import.meta.env.VITE_BASE_URL;
    const updatedBranch = {
      fullName: editFullName,
      email: editEmail,
      phone: editPhone,
      username: editUsername,
      password: editPassword,
      userType: editUserType,
      jobRole: editJobRole,
    };

    await fetch(`${apiUrl}/api/admin/update/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBranch),
    });

    clearForm();
    handleClose();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* edit form */}
        <form onSubmit={handleSubmit}>
          <div className="FieldGroup">
            <label htmlFor="fullName" style={{ marginTop: "-1rem" }}>
              Full Name
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editFullName}
              onChange={(e) => setEditFullName(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="email" style={{ marginTop: "-1rem" }}>
              Email Address
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="phone" style={{ marginTop: "-1rem" }}>
              Phone Number
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="username" style={{ marginTop: "-1rem" }}>
              Username
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editUsername}
              onChange={(e) => setEditUsername(e.target.value)}
            />
          </div>
          {/* <div className="FieldGroup">
            <label htmlFor="password" style={{ marginTop: "-1rem" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter new password or retype old password"
              style={{ width: "100%" }}
              className="Input"
              value={editPassword}
              onChange={(e) => setEditPassword(e.target.value)}
            />
          </div> */}

          <div className="FieldGroup">
            <label htmlFor="userType" style={{ marginTop: "-1rem" }}>
              User Role Type
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editUserType}
              onChange={(e) => setEditUserType(e.target.value)}
            />
          </div>

          <div className="FieldGroup">
            <label htmlFor="jobRole" style={{ marginTop: "-1rem" }}>
              Job Role
            </label>
            <input
              type="text"
              style={{ width: "100%" }}
              className="Input"
              value={editJobRole}
              onChange={(e) => setEditJobRole(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

        <Button variant="primary" type="button" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditUser;
