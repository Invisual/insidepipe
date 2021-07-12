import React, { useState, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"
import { Button } from "../layout/linkBtns"
import CustomAxios from "../../custom/axios"

const Form = ({data}) => {
  const [success, setSuccess] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);
  
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

  const handleSubmit = () => {
    checkValues();
    if(checker.length<1){
      var formData = new FormData()
      formData.append("name", name.current.value)
      formData.append("email", email.current.value)
      formData.append("subject", subject.current.value)
      formData.append("message", message.current.value)

      // CustomAxios("https://invisual.pt/teste-form/insidepipe.php", formData, "OBRIGADO PELA SUA MENSAGEM").then((res) => successRes(res));
      CustomAxios("/assets/form-contact.php", formData, "OBRIGADO PELA SUA MENSAGEM").then((res) => successRes(res));
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

  const checkEmail = () => {
    var re = /\S+@\S+\.\S+/;
    return(re.test(email.current.value));
  }

  return(
    <StyledContainer>
      <CSSTransition in={!success} timeout={350} classNames={"switchModal"} unmountOnExit>
        <div className="container">
          <input type="text" ref={name} className={font.aH + " small"} placeholder={data.name}/>
          <input type="text" ref={email} className={font.aH + " small"} placeholder={data.email}/>
          <input type="text" ref={subject} className={font.aH + " small"} placeholder={data.subject}/>
          <textarea type="text" ref={message} className={font.aH + " small"} placeholder={data.message}/>
          <p className={font.aH + " legenda small"}>{data.legenda}</p>
          <Button className={font.aH + " btn"} dark onClick={handleSubmit}>{data.btn}</Button>
        </div>
      </CSSTransition>
      <CSSTransition in={success} timeout={350} classNames={"switchModal"} unmountOnExit>
        <h3 className={font.aH + " success"}>{data.success}</h3>
      </CSSTransition>
    </StyledContainer>
  )
}

export default Form

const StyledContainer = styled.div`
  position: relative;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input, textarea{
    background-color: rgba(0, 105, 112, 0.1);
    border: none;
    border-radius: 6px;
    margin: 0.5em 0;
    height: 3em;
    padding: 0 2em;
    color: #6a737b;
  }
  textarea{
    height: 7em;
    resize: none;
    padding-top: 0.8em;
  }
  .legenda{
    color: #6a737b;
  }
  .btn{
    align-self: flex-end;
  }
  .success{
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: #006a71;
  }

  /* react-transition-group */
  .switchModal-enter{
    opacity: 0 !important;
  }
  .switchModal-enter-active{
    opacity: 1 !important;
    transition: all 350ms ease-out;
  }
  .switchModal-exit{
    opacity: 1 !important;
  }
  .switchModal-exit-active{
    opacity: 0 !important;
    transition: all 350ms ease-out;
  }

  @media only screen and (max-width: 768px){
    align-self: flex-end;
    margin: 10vw 0 0;
    width: 80vw;
  }
`