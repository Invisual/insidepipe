import React, { useState, useRef } from "react"
import useEventListener from "../../custom/use-event-listener"
import { CSSTransition } from "react-transition-group"
import { Button } from "../layout/linkBtns"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import CustomAxios from "../../custom/axios"
import DragDrop from "./dragDrop"

const Popup = ({ data, setPopup }) => {
  //Drag and drop
  const [files, setFiles] = useState(0);

  const [success, setSuccess] = useState(false);
  const name = useRef(null);
  const dob = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const degree = useRef(null);
  const school = useRef(null);
  const motive = useRef(null);
  const notes = useRef(null);
  const fileRef = useRef(null);

  var checker = [];
  const checkValues = () => {
    checker.forEach(element => {
      element.current.style.border = "none";
    });
    checker=[];
    let checkerTemp = [];
    
    if(!name.current.value){
      checkerTemp.push(name);
    }
    if(!dob.current.value){
      checkerTemp.push(dob);
    }
    if(!phone.current.value){
      checkerTemp.push(phone);
    }
    if(!email.current.value || !checkEmail()){
      checkerTemp.push(email);
    }
    if(!degree.current.value){
      checkerTemp.push(degree);
    }
    if(!motive.current.value){
      checkerTemp.push(motive);
    }
    checker = checkerTemp;
  }
  const checkEmail = () => {
    var re = /\S+@\S+\.\S+/;
    return(re.test(email.current.value));
  }

  const handleSubmit = () => {
    checkValues();
    if(checker.length<1){
      var formData = new FormData()
      formData.append("name", name.current.value)
      formData.append("dob", dob.current.value)
      formData.append("phone", phone.current.value)
      formData.append("email", email.current.value)
      formData.append("degree", degree.current.value)
      formData.append("school", school.current.value)
      formData.append("motive", motive.current.value)
      formData.append("notes", notes.current.value)
      formData.append("cv", files)

      CustomAxios("https://invisual.pt/teste-form/insidepipe-recrutamento.php", formData, "OBRIGADO PELA SUA MENSAGEM").then((res) => successRes(res));
      // CustomAxios("/assets/form-contact.php", formData, "OBRIGADO PELA SUA MENSAGEM").then((res) => successRes(res));
    }
    else{
      checker.forEach(element => {
        element.current.style.border = "solid 2px red";
      });
    }
  }
  const successRes = (res) => {
    setSuccess(true);
  }

  useEventListener("mousedown", (e) => sair(e));
  function sair(e) {
    !document.querySelector('.clickbox').contains(e.target) && setPopup(false);
  }

  return (
    <StyledPopup>
      <div className="clickbox">
        <DragDrop fileDrop={setFiles} fileRef={fileRef}>
          <div className="clickbox-form">
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
                <input type="file" ref={fileRef} onChange={(e)=>setFiles(e.target.files[0])}/>
                <Button className={font.aH + " small input"} dark onClick={()=>{fileRef.current.click()}}>{data.cv[0]}</Button>
                <p className={font.aH + " green small"}>{fileRef.current && fileRef.current.files.length>0 ? fileRef.current.files[0].name : data.cv[1]}</p>
              </div>
              <p className={font.aH + " small"}>{data.legenda}</p>
            </div>

            <Button className={font.aH + " btn"} dark onClick={handleSubmit}>{data.btn}</Button>
          </div>
        </DragDrop>
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
    padding: 5vw 8vw;
    background-color: #ffffff;
    color: #6a737b;
  }
  .clickbox-form{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
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
    align-items: center;
    justify-content: space-between;
    margin: 0.5em 0;
    .file{
      display: flex;
      align-items: center;
      .input{
        background-color: #006a71;
        border-radius: 6px;
        color: #ffffff;
        padding: 0.4em 1em;
        margin-right: 1em;
      }
      input{
        background: none;
        padding: 0;
        width: 0;
        height: 0;
      }
    }
  }
  .btn{
    align-self: center;
    margin-top: 3em;
  }
`
