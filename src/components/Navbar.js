import React, { useCallback, useEffect, useState } from "react";
import _replace from "lodash/replace";
import _isEmpty from "lodash/isEmpty";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { RiAwardFill } from "react-icons/ri";
import { PiCertificateBold } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";

import "./common.styles.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("home");

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const onClickNavBar = useCallback(
    (selectedNav) => () => {
      updateExpanded(false);
      setSelectedNavItem(selectedNav);
    },
    [updateExpanded, setSelectedNavItem]
  );

  useEffect(() => {
    const currentNav = _replace(window?.location?.pathname, "/", "");
    if (!_isEmpty(currentNav)) {
      setSelectedNavItem(currentNav);
    } else {
      setSelectedNavItem("home");
    }
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} alt="brand" style={{ height: "4rem" }} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item
              className={`navItem ${
                selectedNavItem === "home" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link as={Link} to="/" onClick={onClickNavBar("home")}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "about" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link as={Link} to="/about" onClick={onClickNavBar("about")}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "projects" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={onClickNavBar("projects")}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "education" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/education"
                onClick={onClickNavBar("education")}
              >
                <IoSchool style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "internships" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/internships"
                onClick={onClickNavBar("internships")}
              >
                <MdOutlineWork style={{ marginBottom: "2px" }} /> Internships
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "achievements" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/achievements"
                onClick={onClickNavBar("achievements")}
              >
                <RiAwardFill style={{ marginBottom: "2px" }} /> Achievements
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "certifications" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/certifications"
                onClick={onClickNavBar("certifications")}
              >
                <PiCertificateBold style={{ marginBottom: "2px" }} />{" "}
                Certifications
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              className={`navItem ${
                selectedNavItem === "resume" ? "activeNavItem" : ""
              } `}
            >
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={onClickNavBar("resume")}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
