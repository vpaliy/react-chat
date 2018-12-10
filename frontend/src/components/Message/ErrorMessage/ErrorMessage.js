import React from 'react';
import style from './index.module.css'

const ErrorMessage = ({ error }) => (
  error ? (
    <div className={style.component}>
      <p>{error}</p>
    </div>
  ) : null
)

export default ErrorMessage;
