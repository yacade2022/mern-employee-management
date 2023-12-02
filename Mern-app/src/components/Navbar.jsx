import React from "react";
import styled from "styled-components";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useGlobalContext } from "../pages/Dashboard";

const Navbar = ({ data }) => {
  const { toggleSidebar, showLogout, toggleLogout, logout } =
    useGlobalContext();
  const { user } = data;

  return (
    <Wrapper>
      <div className="navbar-container">
        <button className="btn" onClick={() => toggleSidebar()}>
          <FaAlignLeft />
        </button>
        <h4>dashboard</h4>
        <div className="toggle" onClick={() => toggleLogout()}>
          <button className="login">
            <FaUserCircle />
            <span>{user.name}</span>
            <FaCaretDown />
          </button>
          <div className={showLogout ? "drop-down show-logout" : "drop-down "}>
            <button type="button" className="logout" onClick={() => logout()}>
              <AiOutlineLogout />
              <span>logout</span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #9510ca;
  }
  .btn {
    padding: 5px;
    color: #fff;
    background-color: transparent;
    outline: none;
    border: none;

    border-radius: 4px;
    cursor: pointer;
    display: none;
  }
  h4,
  .toggle {
    color: #fff;
    text-transform: capitalize;
  }
  .toggle {
    cursor: pointer;
    position: relative;
  }
  .login {
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #fff;
    border: none;
    border-radius: 2px;
    color: #9510ca;
    text-transform: capitalize;
  }
  .drop-down {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -35px;
    visibility: hidden;
  }
  .logout {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px;
    background-color: #eee;
    border: none;
    border-radius: 2px;
    color: #9510ca;
    text-transform: capitalize;
    cursor: pointer;
  }

  .show-logout {
    visibility: visible;
  }
  @media (max-width: 767px) {
    .btn {
      display: block;
    }
  }
`;
export default Navbar;
