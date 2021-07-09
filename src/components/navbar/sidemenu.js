import React, { useState } from "react"
import { Link } from "gatsby"
import Div100vh from 'react-div-100vh'
import AnimateHeight from 'react-animate-height';
import useEventListener from "../../custom/use-event-listener"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import { Button } from "../layout/linkBtns"
import closeBtn from "../../images/global/menu-close.svg"
import openServices from "../../images/global/serv-down.svg"
import linked from "../../images/global/socials/linked.svg"
import insta from "../../images/global/socials/insta.svg"
import face from "../../images/global/socials/face.svg"
import tube from "../../images/global/socials/tube.svg"

const Sidemenu = ({data, open, close, servicesOpen, newsletter}) => {
  const [services, setServices] = useState(servicesOpen);

  useEventListener("mousedown", (e) => sair(e));
  function sair(e) {
    if(!newsletter[0]){
      !document.querySelector('#sidemenu').contains(e.target) && close(false);
    }
  }

  return(
    <StyledMenu style={{transform: open ? "translateX(0)" : "translateX(100%)"}} id="sidemenu">
      <button className="close-btn" onClick={()=>{close(!open)}}>
        <img src={closeBtn} alt="Botão de Fechar"/>
      </button>

      <div className="content">
        {data.links.map((data, i)=>(
          data.linkTxt !== "SERVIÇOS" ?
            <Link to={data.link} className={font.aH + " menu-links"} activeClassName={font.aH + " menu-links-active"} key={"sidemenu-link-" + i}>
              {data.linkTxt}
            </Link>
           : 
            <div key={"sidemenu-link-" + i}>
              <button className={!services ? (font.aH + " menu-links services-btn") : (font.aH + " menu-links services-btn menu-links-active")} onClick={()=>{setServices(!services)}}>
                <img src={openServices} className={!services ? "servBtn" : "servBtn servBtn-turn"} alt="Botão de Abrir Serviços"/>
                <span>{data.linkTxt}</span>
              </button>
              <AnimateHeight duration={600} height={services ? "auto" : 0} className="services">
              {data.extraLinks.map((data, i)=>(
                <Link to={data.link} className={font.aH + " menu-links small"} activeClassName={font.aH + " menu-links-active"} key={"sidemenu-services-link-" + i}>
                  {data.linkTxt}
                </Link>
              ))}
              </AnimateHeight>
            </div>
        ))}
      </div>

      <div className="socials">
        <Button dark className={font.aH + " menu-newsletter"} onClick={()=>{newsletter[1](!newsletter[0])}}>{data.newsletter.call}</Button>
        <div className="icons">
          <a href="https://pt.linkedin.com/company/insidepipe" className="iconLink"><img src={linked} alt="LinkedIn"/></a>
          <a href="https://www.instagram.com/insidepipe_/" className="iconLink"><img src={insta} alt="Instagram"/></a>
          <a href="https://www.facebook.com/insidepipe/" className="iconLink"><img src={face} alt="Facebook"/></a>
          <a href="https://www.youtube.com/channel/UCMea6c1cWEV7bnTfuU0xVUQ" className="iconLink"><img src={tube} alt="Youtube"/></a>
        </div>
        <a href={data.created[0]} noreferrer noopener target="_blank" className={font.aH + " menu-copyright"}>{data.created[1]}</a>
      </div>
    </StyledMenu>
  )
}


export default Sidemenu

const StyledMenu = styled(Div100vh)`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 6;
  width: 30vw;
  @media only screen and (max-width: 768px){
    width: 100vw;
  }
  transition: transform 600ms ease-out;
  background-color: #ffffff;
  color: #006a71;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a:hover, .services-btn:hover{
    opacity: 1 !important;
  }
  .close-btn{
    position: absolute;
    top: 50px;
    right: 5vw;
    transform: translate(15px, -50%);
    padding: 15px;
    img{height: 20px;}
    z-index: 7;
  }
  .content{
    position: relative;
    padding: 18vh 7vw 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .menu-links{
      text-align: right;
      display: flex;
      justify-content: flex-end;
      opacity: 0.7;
      padding: 1em 0;
      img{width: 1em; margin-left: 0.5em;}
    }
    .menu-links-active{
      opacity: 1;
    }
    .services-btn{
      display: inline-block;
      width: 100%;
      .servBtn{
        width: 0.6em;
        margin-right: 0.4em;
        transition: all 600ms ease-out;
      }
      .servBtn-turn{
        transform: rotate(-180deg);
      }
    }
  }
  .socials{
    padding: 0 5vw 10vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .icons{
      display: flex;
      .iconLink{
        height: 1.5em;
        margin-left: 10px;
        img{height: 100%;}
      }
    }
    .menu-newsletter{
      margin: 2em 0;
      padding: 0.5em 1em;
    }
    .menu-copyright{
      position: relative;
      width: fit-content;
      font-size: 10px;
      margin-top: 15px;
    }
  }
`