import React from "react"
import styled from "styled-components"

const Map = () => {
  return(
    <StyledMap>
      <iframe src="https://snazzymaps.com/embed/325121" className="map" title="Mapa"/>
    </StyledMap>
  )
}

export default Map

const StyledMap = styled.div`
  position: relative;
  width: 100%;
  height: 36.6vw;
  .map{
    width: 100%;
    height: 100%;
    border: none;
  }
  @media only screen and (max-width: 768px){
    height: 80vw;
  }
`