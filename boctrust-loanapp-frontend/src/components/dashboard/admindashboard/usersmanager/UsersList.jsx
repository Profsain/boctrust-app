import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmins } from "../../../../redux/reducers/adminUserReducer";
import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
// import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import NoResult from "../../../shared/NoResult";
import ActionNotification from "../../shared/ActionNotification";

// function
import searchList from "../../../../../utilities/searchListFunc";
import EditUser from "./EditUser";

const UsersList = ({ count, searchTerms }) => {
  const styles = {
    head: {
      color: "#fff",
      fontSize: "1rem",
      backgroundColor: "#145098",
    },
    img: {
      width: "50px",
      height: "40px",
    },
    completed: {
      color: "#5cc51c",
    },
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmins());
  }, [dispatch]);

  const users = useSelector((state) => state.adminUserReducer.admins.users);
  const status = useSelector((state) => state.adminUserReducer.status);

  // local state
  const [usersList, setUsersList] = useState(users);
  const [show, setShow] = useState(false);
  const [action, setAction] = useState(false);
  const [userId, setUserId] = useState("");
  const [userObj, setUserObj] = useState({});

  // update usersList to show 10 users on page load
  useEffect(() => {
    setUsersList(users?.slice(0, count));
  }, [users, count]);

  // update usersList on search
  const handleSearch = () => {
    const currSearch = searchList(users, searchTerms, "fullName");
    setUsersList(currSearch);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerms]);

  // handle action select
  const handleAction = (e) => {
    const option = e.target.value;
    const id = e.target.id;

    // find selected user by id
    const user = users.find((user) => user._id === id);
    setUserObj(user);
    setUserId(id);

    if (option === "edit") {
      setShow(true);
    } else if (option === "delete") {
      setAction(true);
    }
  };

  // handle delete
  const handleDelete = async () => {
    const apiUrl = import.meta.env.VITE_BASE_URL;
    await fetch(`${apiUrl}/api/admin/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // remove user from usersList
    dispatch(fetchAdmins());
    setAction(false);
  };

  return (
    <>
      {status === "loading" && <PageLoader />}

      <div className="ListSec">
        <div style={styles.table}>
          <Table hover responsive="sm">
            <thead style={styles.head}>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Username</th>
                <th>User Type</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {usersList?.length === 0 && <NoResult name="user" />}
              {usersList?.map((user) => (
                <tr key={user._id}>
                  <td>
                    <img
                      src={user.imageUrl}
                      alt="method-logo"
                      style={styles.img}
                    />
                  </td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.userType}</td>
                  <td>{user.jobRole}</td>
                  <td style={styles.completed}>{user.status.toUpperCase()}</td>
                  <td>
                    <select
                      name="action"
                      className="action"
                      id={user._id}
                      onChange={handleAction}
                    >
                      <option value="">Action</option>
                      <option value="edit">Edit</option>
                      <option value="delete">Delete</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* edit user popup model */}
      <EditUser show={show} onHide={() => setShow(false)} userobj={userObj} />

      {/* acton popup model */}
      <ActionNotification
        show={action}
        handleClose={() => setAction(false)}
        handleProceed={handleDelete}
      />
    </>
  );
};

UsersList.propTypes = {
  count: PropTypes.number,
  searchTerms: PropTypes.string,
};

export default UsersList;
