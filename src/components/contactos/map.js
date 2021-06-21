import React from "react"
import styled from "styled-components"

const Map = () => {
  return(
    <StyledMap>
      <iframe src="https://maps.google.com/maps?q=Insidepipe%20-%20Engenharia%20e%20Servi%C3%A7os,%20Lda&t=&z=6&ie=UTF8&iwloc=&output=embed&t=k" style={{border: "0", height: "100%", width: "100%"}} allowFullScreen="" loading="lazy" title="Mapa"/>
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