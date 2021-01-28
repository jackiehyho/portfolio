import React from 'react'
import Styled from '@emotion/styled'

const StyledContainer = Styled.div`
max-width: 1366px;
margin: 0 auto;
height: ${props =>
  props.full ? '100vh' : 'initial'};
`

export default ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)
