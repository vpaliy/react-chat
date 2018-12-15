import React from "react";
import { connect } from "react-redux";
import style from "./index.module.css";

const RoomHeader = ({ title }) => (
  <header className={style.component}>
    <h1>{title}</h1>
  </header>
);

const mapStateToProps = state => ({
  ...state.chat.header
});

export default connect(mapStateToProps)(RoomHeader);
