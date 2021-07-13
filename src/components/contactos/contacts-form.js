import React from "react"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"

import Form from "./form"

const ContactsForm = ({data}) => {

  return(
    <StyledContainer>
      <h3 className={font.aH + " title"}>{data.contacts.title}</h3>
      <div className="contacts">
        <div className="block">
          <p className={font.aB}>{data.contacts.geral.title}</p>
          <a href={data.contacts.geral.email[0]} className={font.aB}>{data.contacts.geral.email[1]}</a>
          <a href={data.contacts.geral.phone[0]} className={font.aB}>{data.contacts.geral.phone[1]}</a>
        </div>
        <div className="block">
          <p className={font.aB}>{data.contacts.comercial.title}</p>
          <a href={data.contacts.comercial.emailC[0]} className={font.aB}>{data.contacts.comercial.emailC[1]}</a>
          <a href={data.contacts.comercial.phoneC[0]} className={font.aB}>{data.contacts.comercial.phoneC[1]}</a>
          <a href={data.contacts.comercial.emailT[0]} className={font.aB}>{data.contacts.comercial.emailT[1]}</a>
          <a href={data.contacts.comercial.phoneT[0]} className={font.aB}>{data.contacts.comercial.phoneT[1]}</a>
        </div>
        <div className="block">
          <p className={font.aB}>{data.contacts.producao.title}</p>
          <a href={data.contacts.producao.email1[0]} className={font.aB}>{data.contacts.producao.email1[1]}</a>
          <a href={data.contacts.producao.email2[0]} className={font.aB}>{data.contacts.producao.email2[1]}</a>
          <a href={data.contacts.producao.phone[0]} className={font.aB}>{data.contacts.producao.phone[1]}</a>
        </div>
      </div>

      {/* <Form data={data.form}/> */}
    </StyledContainer>
  )
}

export default ContactsForm

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 36.6vw; */
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 3vw 5vw;
  .title{color: #006a71;margin-bottom: 2vw;}
  .contacts{
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    white-space: pre-wrap;
    .block{
      margin: 0;
      a, p{
        margin: 0.2em 0;
      }
    }
  }

  @media only screen and (max-width: 768px){
    .title{
      padding: 10vw 10vw 0;
    }
    .contacts{
      flex-direction: column;
      padding: 0 10vw 5vw;
      .block{
        margin: 5vw 0;
      }
    }
  }
`