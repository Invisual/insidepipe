import React from "react"
import styled from "styled-components"

import { useBreakpoint } from "gatsby-plugin-breakpoints"

const TxtLnk = ({ video }) => {
    return (
        <VideoStyled>
            <video preload="none" className='video' poster={''} controls autoPlay playsInline loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </VideoStyled>
    )
}

export default TxtLnk

const VideoStyled = styled.div`
    position: relative;
    width: 100%;
    height: 36.6vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#000;
    
    .video{
        width: 100%;
        height: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
    }

    @media only screen and (max-width: 768px){
        height: 125vw;
    }
`