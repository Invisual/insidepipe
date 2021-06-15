import React, { useState, useRef } from "react"
import useEventListener from "../../custom/use-event-listener"
import { CSSTransition } from "react-transition-group"
import { Button } from "../layout/linkBtns"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import CustomAxios from "../../custom/axios"

const Popup = ({ data, setPopup }) => {

  const [success, setSuccess] = useState(false);
  const name = useRef(null);
  const email = useRef(null);

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
    if(!email.current.value || !checkEmail()){
      checkerTemp.push(email);
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
      formData.append("email", email.current.value)

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
        <h3 className={font.aH + " title"}>{data.title}</h3>

        <input type="text" ref={name} className={font.aH + " small"} placeholder={data.name}/>
        <input type="text" ref={email} className={font.aH + " small"} placeholder={data.email}/>

        <Button className={font.aH + " btn"} dark onClick={handleSubmit}>{data.btn}</Button>
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
  z-index: 7;
  transition: opacity 350ms ease-out;
  
  .clickbox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    padding: 5vw 8vw;
    background-color: #ffffff;
    color: #6a737b;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title{
    color: #006a71;
    margin-bottom: 2em;
    text-align: center;
    text-transform: uppercase;
  }
  input{
    background-color: rgba(0, 105, 112, 0.1);
    border: none;
    border-radius: 6px;
    margin: 2em 0;
    height: 3em;
    padding: 0 2em;
    color: #6a737b;
    flex: auto 1;
  }
  .btn{
    align-self: center;
    margin-top: 3em;
    text-transform: uppercase;
  }
`
