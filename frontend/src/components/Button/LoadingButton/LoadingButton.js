import React from 'react';
import style from './index.module.css'

const LoadingButton = ({ title, isLoading, isEnabled }) => {
  return isLoading
    ? (<div className={style.loader}/>)
    : (
      <input
        type="submit"
        value={title}
        disabled={!isEnabled}
      />
    );
}

export default LoadingButton;
