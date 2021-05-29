import React from "react"
import styled from "styled-components"
import * as font from "../../fonts/fonts.module.scss"

import Form from "./form"

const ContactsForm = ({data}) => {

  return(
    <StyledContainer>
      <div className="contacts">
        <h3 className={font.aH + " title"}>{data.contacts.title}</h3>
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

      <Form data={data.form}/>
    </StyledContainer>
  )
}

export default ContactsForm

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36.6vw;
  display: flex;
  justify-content: space-between;
  .contacts{
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title{color: #006a71;}
    .block{
      margin: 1vw 0;
      a, p{
        margin: 0.2em 0;
      }
    }
  }
`