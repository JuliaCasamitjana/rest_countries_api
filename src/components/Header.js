import React from "react";
import { connect } from "react-redux";
import { changeMode } from "../action/mode";

const Header = (props) => (
  <nav className={`${props.mode === "light" ? "" : "dark_light"} header`}>
    <h1>Where in the world?</h1>
    <div className="header__mode" onClick={props.changeMode}>
      {props.mode === "light" && (
        <span>
          <i className="fa fa-moon-o" aria-hidden="true"></i>
          <span> Dark Mode</span>
        </span>
      )}
      {props.mode === "dark" && (
        <span>
          <i className="fas fa-moon" aria-hidden="true"></i>
          <span> Light Mode</span>
        </span>
      )}
    </div>
  </nav>
);

const mapStateToProps = (state) => {
  return {
    mode: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeMode: () => dispatch(changeMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
