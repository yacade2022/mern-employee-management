import React from "react";
import styled from "styled-components";
import { FaBorderAll, FaTimes } from "react-icons/fa";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../pages/Dashboard";

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container hide-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="btn" onClick={() => toggleSidebar()}>
            <FaTimes />
          </button>

          <div className="links">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => toggleSidebar()}
            >
              <AiOutlineUsergroupAdd />
              <span>Add Employee</span>
            </NavLink>
            <NavLink
              to="all-employees"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => toggleSidebar()}
            >
              <FaBorderAll />
              <span>All Employees</span>
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              onClick={() => toggleSidebar()}
            >
              <CgProfile />
              <span>profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sidebar-container {
    width: 25vw;
    background-color: #9510ca;
    min-height: 100vh;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
  .link {
    color: #fff;
    padding: 10px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: margin-left 0.3s ease-in-out;
  }
  .btn {
    display: none;
  }
  .active {
    color: yellow;
  }
  .link:hover {
    margin-left: 8px;
  }
  span {
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
  }
  @media (max-width: 767px) {
    .sidebar-container {
      height: 100vh;
      width: 100vw;

      background-color: #9510ca;
      position: fixed;
      opacity: 1;
      visibility: visible;
      z-index: 33;
      inset: 0;
    }
    .btn {
      display: block;
      position: absolute;
      right: 15px;
      top: 5px;
      background-color: #fff;
      color: #9510ca;
      padding: 5px;
      border: none;
      border-radius: 2px;
      font-size: 18px;
      cursor: pointer;
    }
    .hide-sidebar {
      opacity: 0;
      visibility: hidden;
      z-index: -10;
    }
  }
  /* 
.sidebar-container{
height: 100vh;
width: 250px;
margin-left: 250px;
background-color: #9510ca;
transition: margin-left .3s ease-in-out;
}

.show-sidebar{
    margin-left: 0;

}

.sidebar{
    position: sticky;
    top: 0;
}
.btn{
    display:none;
}

.links{
    display: flex;
    flex-direction: column;
   padding-top: 50px;
}
.link{
    color: #fff;
    padding: 10px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;    
    text-decoration: none;
    transition: margin-left .3s ease-in-out;
}
.active{
    color: yellow;
}
.link:hover{
margin-left: 8px;
}
span{
    font-size: 20px;
    font-weight: 600;
    margin-left: 5px;
}


@media (max-width:767px){
    .btn{
    display:block;
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: #fff;
    color: #9510ca;
    padding: 5px;
    border: none;
    border-radius: 2px;
    font-size: 18px;
}
.sidebar-container{
    position: fixed;
    width: 100vw;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
} 
.show-sidebar{
    z-index: 10;
    opacity: 1;
    visibility: visible;
}
} */
`;

export default Sidebar;
