import React, { useState, useRef, useEffect } from "react"
import useEventListener from "../../custom/use-event-listener"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import Newsletter from "../popups/newsletter"

import logo from "../../images/global/logo.svg"
import menu from "../../images/global/menu_hamb.svg"

import Sidemenu from "./sidemenu"

const Navbar = ({ ...props }) => {
  const navbar = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState("");
  const [currentScrollPos, setCurrentScrollPos] = useState("");

  const [newsletter, setNewsletter] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setPrevScrollPos(window.pageYOffset)
  }, [])
  useEventListener("scroll", () => scroller())

  function scroller() {
    setCurrentScrollPos(window.pageYOffset)
    if (prevScrollPos > currentScrollPos || window.pageYOffset <= 0) {
      navbar.current.style.top = "0px"
    } else {
      navbar.current.style.top = "-100px"
    }
    setPrevScrollPos(currentScrollPos)
  }

  return (
    <StyledNav ref={navbar}>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo"/>
      </Link>

      <button className="menuBtn" onClick={()=>{setMenuOpen(!menuOpen)}}>
        <img src={menu} alt="Menu"/>
      </button>
      <Sidemenu data={props.sidemenu} open={menuOpen} close={setMenuOpen} servicesOpen={props.servicesOpen} newsletter={[newsletter, setNewsletter]}/>
      <CSSTransition in={newsletter===true} timeout={350} classNames={"switch"} unmountOnExit>
        <Newsletter data={props.sidemenu.newsletter} setPopup={setNewsletter}/>
      </CSSTransition>
    </StyledNav>
  )
}

export default Navbar

const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006a71;
  z-index: 5;
  padding: 20px 5%;
  .logo{
    position: relative;
    height: 60px;
    img{height: 100%;}
  }
  .menuBtn{
    padding: 15px;
    transform: translateX(15px);
    img{height: 15px;}
  }

  .switch-enter{
    opacity: 0 !important;
  }
  .switch-enter-active{
    opacity: 1 !important;
    transition: all 350ms ease-out;
  }
  .switch-exit{
    opacity: 1 !important;
  }
  .switch-exit-active{
    opacity: 0 !important;
    transition: all 350ms ease-out;
  }
`
