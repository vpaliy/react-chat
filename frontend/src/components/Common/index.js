import styled, { keyframes } from 'styled-components'

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const SmallIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: #006eff;
`
