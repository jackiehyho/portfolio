import React from 'react'
import Styled from '@emotion/styled'

const StyledContainer = Styled.div`
max-width: 1366px;
margin: 0 auto;
`
export default ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)
