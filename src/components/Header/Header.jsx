import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
 
  {
    path: "/home",
    display: "Promotions",
  },
   {
    path: "/home",
    display: "Contact",
  }

];

const Header = () => {
  const menuRef = useRef(null);

  let k = localStorage.getItem("islogged");
  
  let dg = false ;
  if (k=='true')
  {
	  
	dg = true;  
	//alert(dg);
  }
  
  const logout = (event) => {
	  
	  localStorage.setItem("islogged",false);
	  dg = false;
	    window.location.reload(false);
    event.preventDefault();
	
	
	
	
  };
  
  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
             
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                

                
				  
				 {	(dg) ?
				(<Link to="/home" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-circle-line"></i> MyAccount
                </Link>
				)
				
			:
			
				(<Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
				 )
				 
				 }
				 
				 
				 	 {	(dg) ?
				(<Link to="/home" onClick={logout} className=" d-flex align-items-center gap-1">
                  <i class="ri-user-circle-line" ></i> Logout
                </Link>
				)
				
			:
			
				(<Link to="/register" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Register
                </Link>
				 )
				 
				 }
				 
				 
			
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i class="ri-car-line"></i>
                    <span>
                      Rent A Car <br /> 
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
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

           
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
