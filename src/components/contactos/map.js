import React from "react"
import styled from "styled-components"

const Map = () => {
  return(
    <StyledMap>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12085.66271458413!2d-8.574124675671388!3d40.77487480740991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e9f3359684e348f!2sInsidepipe%20-%20Engenharia%20e%20Servi%C3%A7os%2C%20Lda!5e0!3m2!1spt-PT!2spt!4v1622133706470!5m2!1spt-PT!2spt" style={{border: "0", height: "100%", width: "100%"}} allowFullScreen="" loading="lazy" title="Mapa"/>
    </StyledMap>
  )
}

export default Map

const StyledMap = styled.div`
  position: relative;
  width: 100%;
  height: 36.6vw;
  @media only screen and (max-width: 768px){
    height: 80vw;
  }
`