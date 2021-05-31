import React, { useState, useRef } from "react"
import useEventListener from "../../custom/use-event-listener"
import { CSSTransition } from "react-transition-group"

import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"

const Popup = ({ data, setPopup }) => {
  const name = useRef(null);
  const dob = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const degree = useRef(null);
  const school = useRef(null);
  const motive = useRef(null);
  const notes = useRef(null);

  useEventListener("mousedown", (e) => sair(e));
  function sair(e) {
    !document.querySelector('.clickbox').contains(e.target) && setPopup(false);
  }

  return (
    <StyledPopup>
      <div className="clickbox">
        <h3 className={font.aH + " title"}>{data.title}</h3>

        <input type="text" ref={name} className={font.aH + " small"} placeholder={data.name}/>
        <div className="flex-input">
          <input type="text" ref={dob} className={font.aH + " small"} placeholder={data.dob}/>
          <input type="text" ref={phone} className={font.aH + " small"} placeholder={data.phone}/>
        </div>
        <input type="text" ref={email} className={font.aH + " small"} placeholder={data.email}/>
        <div className="flex-input">
          <input type="text" ref={degree} className={font.aH + " small"} placeholder={data.degree}/>
          <input type="text" ref={school} className={font.aH + " small"} placeholder={data.school}/>
        </div>
        <textarea type="text" ref={motive} className={font.aH + " small"} placeholder={data.motive}/>
        <input type="text" ref={notes} className={font.aH + " small"} placeholder={data.notes}/>

        <div className="file-flex">
          <div className="file">
            <input type="file"/>
            <p className={font.aH + " green"}>{data.cv[1]}</p>
          </div>
        </div>

      </div>
    </StyledPopup>
  )
}

export default Popup

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,	106,	113, 0.8);
  
  .clickbox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    padding: 8vw 10vw;
    background-color: #ffffff;
    color: #6a737b;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{
      color: #006a71;
      margin-bottom: 1.5em;
      text-align: center;
    }
    .flex-input{
      display: flex;
      gap: 1em;
    }
    input, textarea{
      background-color: rgba(0, 105, 112, 0.1);
      border: none;
      border-radius: 6px;
      margin: 0.5em 0;
      height: 3em;
      padding: 0 2em;
      color: #6a737b;
      flex: auto 1;
    }
    textarea{
      height: 7em;
      resize: none;
      padding-top: 0.8em;
    }
    .file-flex{
      display: flex;
      .file{display: flex;}
    }
  }
`
