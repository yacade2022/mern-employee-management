import React from "react";
import styled from "styled-components";
import { FaBorderAll, FaTimes } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../pages/Dashboard";

const links = [
  { to: "/dashboard", end: true, label: "Add Employee", icon: <AiOutlineUsergroupAdd /> },
  { to: "all-employees", label: "All Employees", icon: <FaBorderAll /> },
  { to: "profile", label: "Profile", icon: <CgProfile /> },
];

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();

  // Only close the menu if it is open (mobile); on desktop it is always visible.
  const closeSidebar = () => {
    if (showSidebar) toggleSidebar();
  };

  return (
    <Wrapper>
      <div
        className={showSidebar ? "backdrop show" : "backdrop"}
        onClick={closeSidebar}
        aria-hidden="true"
      />
      <aside
        id="dashboard-sidebar"
        className={showSidebar ? "sidebar-container show" : "sidebar-container"}
      >
        <div className="sidebar-header">
          <span className="brand">Employees Management</span>
          <button
            type="button"
            className="close-btn"
            onClick={closeSidebar}
            aria-label="Close menu"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Dashboard">
          <ul className="links">
            {links.map(({ to, end, label, icon }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? "link active" : "link")}
                  onClick={closeSidebar}
                >
                  <span className="icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar-container {
    width: var(--sidebar-width);
    min-height: 100vh;
    background-color: var(--surface);
    border-right: 1px solid var(--border);
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: var(--nav-height);
    padding: 0 1.25rem;
    border-bottom: 1px solid var(--border);
  }
  .brand {
    font-weight: 700;
    color: var(--primary-600);
  }

  .links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1rem 0.75rem;
  }
  .link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-height: 44px;
    padding: 0.625rem 0.875rem;
    font-weight: 500;
    color: var(--gray-600);
    text-decoration: none;
    border-radius: var(--radius-sm);
    transition: background-color var(--transition), color var(--transition);
  }
  .link:hover {
    color: var(--gray-900);
    background-color: var(--gray-100);
  }
  .link.active {
    color: var(--primary-700);
    background-color: var(--primary-50);
    font-weight: 600;
  }
  .icon {
    display: inline-flex;
    font-size: 1.125rem;
  }

  .close-btn {
    display: none;
  }
  .backdrop {
    display: none;
  }

  /* Mobile: off-canvas drawer */
  @media (max-width: 767px) {
    .sidebar-container {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 40;
      width: min(80vw, 300px);
      min-height: 0;
      height: 100%;
      box-shadow: var(--shadow-lg);
      transform: translateX(-100%);
      visibility: hidden;
      transition: transform 220ms ease, visibility 220ms;
    }
    .sidebar-container.show {
      transform: translateX(0);
      visibility: visible;
    }
    .backdrop {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 39;
      background-color: rgba(28, 24, 35, 0.45);
      opacity: 0;
      visibility: hidden;
      transition: opacity 220ms ease, visibility 220ms;
    }
    .backdrop.show {
      opacity: 1;
      visibility: visible;
    }
    .close-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      margin-right: -0.5rem;
      font-size: 1.125rem;
      color: var(--gray-600);
      background: transparent;
      border: none;
      border-radius: var(--radius-sm);
      cursor: pointer;
    }
    .close-btn:hover {
      background-color: var(--gray-100);
    }
  }
`;

export default Sidebar;
