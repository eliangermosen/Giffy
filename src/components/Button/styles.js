import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

const SIZES = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
}

const getFontSize = props => {
  const size = [props.size]
  if(!size) {
    console.warn(`This size is not correct. Use ${Object.keys(SIZES).join(', ')}`)
    return SIZES.small
  }
  return size
}

/* etiquetas html
const LinkStyled = styled.a` */
// etiquetas no html
export const Link = styled(LinkWouter)`
  border: 1px solid transparent;
  padding: .5rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${({theme}) => theme.colors.textColor};
  cursor: pointer;
  font-size: ${getFontSize};

  :hover {
    background-color: var(--brand-color_6);
   }

   [disabled] {
    opacity: .3;
    pointer-events: none;
  }
`

export const Button = Link.withComponent('button')