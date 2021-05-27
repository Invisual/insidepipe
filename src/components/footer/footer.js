import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import logo from "../../images/global/logo.svg"
import uniao from "../../images/global/footer/uniao.svg"
import port from "../../images/global/footer/port2020.svg"
import centro from "../../images/global/footer/centro2020.svg"

const Footer = ({ data }) => {

  return (
    <StyledFooter>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo"/>
      </Link>

      <div className="footer-col">
        {data.address.map((data, i)=>(
          <p className={font.aB} key={"address" + i}>{data}</p>
        ))}
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
`
