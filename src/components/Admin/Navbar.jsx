import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

import "../../styles/adminHeader.css";

const navLinks = [
    {
        path: "/admin/home",
        display: "Home",
      },
  {
    path: "/admin/carList",
    display: "Car List",
  },
  {
    path: "/admin/customerList",
    display: "Customer List",
  },
  {
    path: "/admin/bookingList",
    display: "Booking List",
  }
];

const Navbar = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
          <div className="logo1">
                <h1>
                  <Link to="/admin/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Car Rental <br /> Website
                    </span>
                  </Link>
                </h1>
              </div>
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              {/* <div className="search__box">
                <input type="text" placeholder="Search" />
                 <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>  */}
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              {/* <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link> */}
                <Link to="/" className=" d-flex align-items-center gap-1">
                  <i class="ri-logout-circle-line"></i> Logout
                </Link> 
                </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
