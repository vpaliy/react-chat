import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;

  ::after {
    display: block;
    left: 0;
    bottom: -10px;
    width: 0;
    height: 2px;
    background-color: #56baed;
    content: "";
    transition: width 0.2s;
  }

  :hover {
    color: #0d0d0d;
  }

  :hover:after {
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  margin-top: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
`;

const AuthFooter = ({ path, text }) => (
  <LinkWrapper>
    <StyledLink to={path}>{text}</StyledLink>
  </LinkWrapper>
);

export default AuthFooter;
