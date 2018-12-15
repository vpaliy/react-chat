import React from 'react';
import { spin } from 'Common'
import styled from 'styled-components'

const Button = styled.input`
  background-color: #56baed;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);
  border: none;
  color: white;
  padding: 15px 80px;
  margin-top: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 15px;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;

  :disabled {
    background: #cccccc;
    -webkit-box-shadow: none;
    box-shadow: none;
}
`

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 2s linear infinite;
`

const LoadingButton = ({ title, isLoading, isEnabled }) => {
  return isLoading ? <Loader />
    : (
      <Button
        type="submit"
        value={title}
        disabled={!isEnabled}
      />
    );
}

export default LoadingButton
