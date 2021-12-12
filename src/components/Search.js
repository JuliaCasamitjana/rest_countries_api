import React from "react";
import { connect } from "react-redux";

class Search extends React.Component {
  state = {
    search: "",
  };

  onChangeInput = (e) => {
    let search = e.target.value;
    this.setState(
      () => ({ search }),
      () => this.props.handleSearch(this.state.search)
    );
  };

  render() {
    return (
      <div
        className={`${
          this.props.mode === "light" ? "" : "dark_light"
        } desktop__input`}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          name="search"
          aria-label="Search"
          value={this.state.search}
          onChange={this.onChangeInput}
          placeholder=" Search for a coutry..."
        ></input>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state,
  };
};

export default connect(mapStateToProps)(Search);
