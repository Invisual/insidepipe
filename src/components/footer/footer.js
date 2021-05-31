import React, { useState } from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"
import useLockBodyScroll from "../../custom/use-lock-body-scroll"

import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"

import Popup from "../popups/recrut"

import logo from "../../images/global/logo.svg"
import uniao from "../../images/global/footer/uniao.svg"
import port from "../../images/global/footer/port2020.svg"
import centro from "../../images/global/footer/centro2020.svg"

const Footer = ({ data, recrutData }) => {
  const [recrut, setRecrut] = useState(false);
  // useLockBodyScroll(recrut);

  return (
    <StyledFooter>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo"/>
      </Link>

      <div className="footer-col">
        {data.address.map((data, i)=>(
          <p className={font.aB} key={"address" + i}>{data}</p>
        ))}
        <button onClick={()=>{setRecrut(!recrut)}} className={font.aB}>{data.recrut}</button>
        <CSSTransition in={recrut===true} timeout={350} classNames={"switch"} unmountOnExit>
          <Popup data={recrutData} setPopup={setRecrut}/>
        </CSSTransition>
      </div>

      <div className="footer-col">
        {data.privacy.map((data, i)=>(
          <p className={font.aB} key={"privacy" + i}>{data}</p>
        ))}
      </div>

      <div className="footer-col cofinan">
        <p className={font.aB}>{data.cofinan}</p>
        <p className="icons">
          <img src={centro} alt="Centro2020"/>
          <img src={port} alt="Portugal2020"/>
          <img src={uniao} alt="UE"/>
        </p>
      </div>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #006a71;
  padding: 20px 5%;
  .logo{
    position: relative;
    height: 60px;
    img{height: 100%;}
  }
  .footer-col{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
  }
  .cofinan{
    align-self: flex-start;
    .icons{
      display: flex;
      gap: 1em;
      margin-top: 1em;
      height: 1.6em;
      img{
        height: 100%;
      }
    }
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
