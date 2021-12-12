import React from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
import CountryOverview from "./CountryOverview";
import { connect } from "react-redux";

class Desktop extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    axios
      .get(
        'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
      )
      .then((res) => {
        this.setState({ countries: res.data });
      })
      .catch((e) => {
        this.setState({
          error: "The server might be busy. Try again in a couple of minutes",
        });
      });
  };

  handleSearch = (search) => {
    if (search) {
      axios
        .get(
          `https://restcountries.com/v3.1/name/${search}?fields=name,flags,population,region,capital`
        )
        .then((res) => {
          this.setState({ countries: res.data, error: "" });
        })
        .catch((e) => {
          this.setState({
            error: "We couldn't find this country. Try again with other words",
          });
        });
    } else {
      axios
        .get(
          "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
        )
        .then((res) => {
          this.setState({ countries: res.data });
        })
        .catch((e) => {
          this.setState({
            error: "The server might be busy. Try again in a couple of minutes",
          });
        });
    }
  };

  handleFilter = (region) => {
    if (region) {
      axios
        .get(
          `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital`
        )
        .then((res) => {
          this.setState({ countries: res.data, error: "" });
        })
        .catch((e) => {
          this.setState({
            error: "The server might be busy. Try again in a couple of minutes",
          });
        });
    } else {
      axios
        .get(
          `https://restcountries.com/v3.1/region/${region}?fields=name,flags,population,region,capital`
        )
        .then((res) => {
          this.setState({ countries: res.data, error: "" });
        })
        .catch((e) => {
          this.setState({
            error: "The server might be busy. Try again in a couple of minutes",
          });
        });
    }
  };

  render() {
    return (
      <div
        className={`${
          this.props.mode === "light" ? "" : "dark"
        } desktop container`}
      >
        <Search handleSearch={this.handleSearch} />
        <Filter handleFilter={this.handleFilter} />

        {this.state.error && <p>{this.state.error}</p>}

        <div className="desktop__country">
          {this.state.countries.slice(0, 10).map((info, i) => (
            <CountryOverview info={info} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state,
  };
};

export default connect(mapStateToProps)(Desktop);
