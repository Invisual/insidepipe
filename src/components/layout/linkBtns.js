import styled, { css } from "styled-components"
import { Link } from 'gatsby'


const ButtonLink = styled(Link)`
  
  background: #ffffff;
  color: #006a71;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.8em 3em;
  width: fit-content;

  ${props => props.dark && css`
    background: #006a71;
    color: #f4f4f4;
  `}
`
export default ButtonLink

const Button = styled.button`
  background: #ffffff;
  color: #006a71;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.8em 3em;
  width: fit-content;

  ${props => props.dark && css`
    background: #006a71;
    color: #f4f4f4;
  `}
`

export { Button }