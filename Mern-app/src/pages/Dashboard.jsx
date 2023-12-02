import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createContext, useContext, useState } from "react";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const dashboardContext = createContext();

const Dashboard = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleSidebar = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  const logout = async () => {
    await customFetch.get("/auth/logout");
    navigate("/");
  };
  return (
    <dashboardContext.Provider
      value={{ toggleSidebar, showSidebar, toggleLogout, showLogout, logout }}
    >
      <Wrapper>
        <div className="dashboard-container">
          <div className="sidebar">
            <Sidebar />
          </div>

          <div className="second-column">
            <Navbar data={data} />
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </dashboardContext.Provider>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
  .dashboard-container {
    display: grid;
    align-items: start;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .dashboard-container {
      grid-template-columns: auto 1fr;
    }

    .sidebar {
      position: sticky;
      top: 0;
    }
  }
`;
export const useGlobalContext = () => useContext(dashboardContext);
export default Dashboard;
