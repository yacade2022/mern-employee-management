import React from "react";
import styled from "styled-components";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { useGlobalContext } from "../pages/Dashboard";

const Navbar = ({ data }) => {
  const { toggleSidebar, showSidebar, showLogout, toggleLogout, logout } =
    useGlobalContext();
  const { user } = data;

  return (
    <Wrapper>
      <div className="navbar-container">
        <button
          type="button"
          className="menu-btn"
          onClick={() => toggleSidebar()}
          aria-label="Open menu"
          aria-controls="dashboard-sidebar"
          aria-expanded={showSidebar}
        >
          <FaAlignLeft aria-hidden="true" />
        </button>

        <h1 className="title">Dashboard</h1>

        <div className="user-menu">
          <button
            type="button"
            className="user-btn"
            onClick={() => toggleLogout()}
            aria-haspopup="true"
            aria-expanded={showLogout}
            aria-controls="user-dropdown"
          >
            <FaUserCircle className="avatar" aria-hidden="true" />
            <span className="user-name">{user.name}</span>
            <FaCaretDown
              className={showLogout ? "caret open" : "caret"}
              aria-hidden="true"
            />
          </button>
          <div
            id="user-dropdown"
            className={showLogout ? "drop-down show" : "drop-down"}
          >
            <button type="button" className="logout" onClick={() => logout()}>
              <AiOutlineLogout aria-hidden="true" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.92);
  backdrop-filter: saturate(180%) blur(8px);
  border-bottom: 1px solid var(--border);

  .navbar-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-height: var(--nav-height);
    padding: 0 1rem;
  }

  .title {
    flex: 1;
    font-size: var(--text-lg);
    font-weight: 700;
  }

  .menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin-left: -0.5rem;
    font-size: 1.125rem;
    color: var(--gray-700);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
  }
  .menu-btn:hover {
    background-color: var(--gray-100);
  }

  .user-menu {
    position: relative;
  }
  .user-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 44px;
    max-width: 220px;
    padding: 0.375rem 0.75rem;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--gray-700);
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: 999px;
    cursor: pointer;
    transition: background-color var(--transition), border-color var(--transition);
  }
  .user-btn:hover {
    background-color: var(--gray-50);
    border-color: var(--gray-300);
  }
  .avatar {
    flex-shrink: 0;
    font-size: 1.375rem;
    color: var(--primary-500);
  }
  .user-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
  }
  .caret {
    flex-shrink: 0;
    transition: transform var(--transition);
  }
  .caret.open {
    transform: rotate(180deg);
  }

  .drop-down {
    position: absolute;
    right: 0;
    top: calc(100% + 0.5rem);
    min-width: 100%;
    padding: 0.375rem;
    background-color: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: opacity var(--transition), transform var(--transition),
      visibility var(--transition);
  }
  .drop-down.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .logout {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    min-height: 40px;
    padding: 0.5rem 0.75rem;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--danger-600);
    background: transparent;
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    white-space: nowrap;
  }
  .logout:hover {
    background-color: var(--danger-50);
  }

  @media (min-width: 768px) {
    .navbar-container {
      padding: 0 2rem;
    }
  }
  @media (max-width: 767px) {
    .menu-btn {
      display: inline-flex;
    }
  }
  @media (max-width: 400px) {
    .user-name {
      max-width: 90px;
    }
  }
`;
export default Navbar;
