import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import Login from "./login/Login";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./admindashboard/dashboardhome/AdminDashboard";

const Dashboard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  // show dashboard base on current user admin/customer
  const currentUser = useSelector((state) => state.adminAuth.user);
  useEffect(() => {
    if (currentUser) {
      setIsLogin(true);
      setUser(currentUser.userType);
    }
  }, [currentUser]);

  return (
    <div className="DashboardContainer">
      {isLogin === false ? (
        <Login setLogin={setIsLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <CustomerDashboard />
      )}
    </div>
  );
};

export default Dashboard;
