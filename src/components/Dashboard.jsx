import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import {
  FaBars,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChartBar,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import PayPalButton from "./PayPalButton";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext); // Ensure user authentication state is available
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    // Redirect to login if user is not authenticated
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : "closed"} d-lg-block`}
      >
        <h4 className="text-center mt-3">Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link text-white d-flex align-items-center"
            >
              <FaHome className="me-2" /> Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/main"
              className="nav-link text-white d-flex align-items-center"
            >
              <FaUser className="me-2" /> LazyMemoDemo
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/card"
              className="nav-link text-white d-flex align-items-center"
            >
              <FaCog className="me-2" /> Cards
            </a>
          </li>
          <li className="nav-item mt-3">
            <button
              onClick={handleLogout}
              className="btn btn-danger w-100 d-flex align-items-center"
            >
              <FaSignOutAlt className="me-2" /> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient border-bottom">
          <div className="container-fluid">
            <button
              className="btn btn-light d-lg-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars />
            </button>
            <span className="navbar-brand fw-bold">Dashboard</span>
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <FaUsers className="icon" />
                  <h5 className="card-title mt-2">Total Users</h5>
                  <p className="card-text">245</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <FaChartBar className="icon" />
                  <h5 className="card-title mt-2">Active Users</h5>
                  <p className="card-text">180</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card card-custom">
                <div className="card-body text-center">
                  <FaDollarSign className="icon" />
                  <h5 className="card-title mt-2">Total Revenue</h5>
                  <p className="card-text">$1200</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8">
              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">User Activity Graph</h5>
                  <div className="graph-placeholder">Graph/Chart</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card card-custom">
                <div className="card-body">
                  <h5 className="card-title">Latest Updates</h5>
                  <ul>
                    <li>New user registered</li>
                    <li>System update completed</li>
                    <li>Support ticket resolved</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <h1>PayPal Payment Gateway</h1>
              <PayPalButton />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: linear-gradient(to bottom, #343a40, #212529);
          transition: all 0.3s;
        }
        .sidebar.closed {
          width: 0;
          padding: 0;
          overflow: hidden;
        }
        .nav-link {
          padding: 10px;
          font-size: 16px;
          transition: background 0.3s;
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
        }
        .bg-gradient {
          background: linear-gradient(to right, #007bff, #6610f2);
          color: white;
        }
        .main-content {
          flex-grow: 1;
          width: 100%;
          padding: 15px;
          transition: margin-left 0.3s;
        }
        .card-custom {
          background: #f8f9fa;
          border: none;
          border-radius: 8px;
          transition: transform 0.2s;
        }
        .card-custom:hover {
          transform: translateY(-5px);
        }
        .icon {
          font-size: 40px;
          color: #007bff;
        }
        .graph-placeholder {
          height: 250px;
          background: rgba(0, 123, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          color: #007bff;
        }
        @media (max-width: 992px) {
          .sidebar {
            position: fixed;
            z-index: 1000;
            height: 100%;
          }
          .main-content {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
