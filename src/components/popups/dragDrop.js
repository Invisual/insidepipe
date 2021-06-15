import React, { useState, useRef } from "react"
import * as font from "../../fonts/fonts.module.scss"
import styled from "styled-components"

import drag from "../../images/global/drag.svg"

const DragDrop = ({ children, fileDrop, fileRef }) => {
  //Drag and drop
  const pointerEvents = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
    pointerEvents.current.style.pointerEvents= "none";
  }
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      fileDrop(e.dataTransfer.files[0]);
      fileRef.current.files=e.dataTransfer.files;
      e.dataTransfer.clearData();
    }
    pointerEvents.current.style.pointerEvents= "all";
  }

  return (
    <StyledDrag
      onDragOver={(e)=>{handleDrag(e)}}
      onDrop={(e)=>{handleDrop(e)}}
    >
      <div ref={pointerEvents}>
        {dragging &&
          <div className="filter">
            <div className="message">
              <img src={drag} alt="Upload"/>
              <p className={font.aH}>LARGUE AQUI</p>
            </div>
          </div>
        }
        {children}
      </div>
    </StyledDrag>
  )
}

export default DragDrop

const StyledDrag = styled.div`
  .filter{
    border: dashed grey 4px;
    background-color: rgba(255,255,255,.8);
    z-index: 9999;
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .message{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      img{width: 10vw;margin-bottom: 15px;}
    }
  }
`
