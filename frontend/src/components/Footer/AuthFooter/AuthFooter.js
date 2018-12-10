import React from 'react';
import { Link } from 'react-router-dom'
import style from './index.module.css'

const AuthFooter = ({ path, text }) => (
  <div className={style.component}>
    <Link className={style.underlineHover} to={path}>{text}</Link>
  </div>
)

export default AuthFooter;
