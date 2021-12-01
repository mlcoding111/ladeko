import React, { useState, useEffect } from "react";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { NavLink, useLocation, Link } from "react-router-dom";

export default function Navigation() {
  // Force le "scroll up" a chaque fois que l'histoiry (useLocation) change
  let loc = useLocation();
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    window.scrollTo(0, 0);
    console.log("lco changed");
    document.querySelector("#big-nav").classList.remove("sticky");
  }, [loc]);

  useEffect(() => {
    document.querySelector("body").addEventListener("scroll", handleScroll);
    // Return = clean up when component is ran
    return () => {
      document
        .querySelector("body")
        .removeEventListener("scroll", handleScroll);
    };
  }, [document.body.scrollTop]);

  useEffect(() => {
    document.querySelector("body").addEventListener("click", handleClick);
    document.querySelector(".navbar-bg").classList.remove("sticky");
  }, []);

  // navbar-collapse collapse show

  // navbar-collapse collapse
  const handleClick = (e) => {
    // console.log('clicked : ', e.target)
    // let nav = document.querySelector("#responsive-navbar-nav").classList.contains("navbar-collapse collapse show")
    // let navBar = document.querySelector("#responsive-navbar-nav")
    // // console.log(e.target.classList.contains("active") || e.target.classList.contains("navbar-nav") || e.target.classList.contains("navbar"))
    // let conditionMet = e.target.classList.contains("active") || e.target.classList.contains("navbar-nav") || e.target.classList.contains("navbar")
    // if (!conditionMet) {
    //     document.querySelector("#responsive-navbar-nav").classList.remove("show")
    //     document.querySelector("#toggler").classList.remove("collapsed")
    // }
  };

  const handleScroll = () => {
    let scrollValue = document.body.scrollTop;
    if (scrollValue > 150) {
      document.querySelector("#big-nav").classList.add("sticky");
    } else {
      document.querySelector("#big-nav").classList.remove("sticky");
    }
  };

  return (
    <>
      <div className="container-fluid navbar-bg" id="big-nav">
        <Container id="nav-container">
          <Navbar collapseOnSelect expand="xl" variant="dark" collapseOnSelect>
            <Navbar.Brand href="/">
              <h1 id="brand">Ladeko</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggler" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="ml-auto"
                onClick={() =>
                  document.querySelector("#big-nav").classList.remove("sticky")
                }
              >
                <Nav.Link eventKey="1" as={Link} to="/">
                  Accueil
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/Prix">
                  Prix
                </Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/Realisations">
                  Réalisations
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/Contact">
                  Contact
                </Nav.Link>
                <Nav.Link
                  eventKey="5"
                  as={Link}
                  to="/Boutique"
                >
                  Boutique
                </Nav.Link>
              </Nav>
              <Nav></Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
