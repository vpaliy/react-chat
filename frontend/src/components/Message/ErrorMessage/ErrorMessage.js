import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;
`

const Text = styled.p`
  color: red;
  font-size: 17px;
  margin-bottom: 0px;
`

const ErrorMessage = ({ error }) => (
  error ? (
    <Wrapper>
      <Text>{error}</Text>
    </Wrapper>
  ) : null
)

export default ErrorMessage;
