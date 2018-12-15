import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > *:not(:first-child) {
      margin-top: 12px;
  };
`

export const Input = styled.input`
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 65%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  box-sizing: content-box;
`

export const Header = styled.h2`
  text-align: center;
  font-size: 26px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: gray;
  box-sizing: content-box;
`

export const Page = styled.div`
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: transparent;
  max-width: 420px;
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  top: 20%;
  box-sizing: content-box;
`

export class Logo extends React.Component {
  defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: require('./animation.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  render() {
    return (
      <Lottie
        options={this.defaultOptions}
        height={200}
        width={200}
      />
    )
  }
}
