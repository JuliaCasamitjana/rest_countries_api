import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Country extends React.Component {
  state = {
    country: null,
    borders: [],
  };

  componentDidMount = () => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({ country: res.data[0] });
      });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    if (!this.state.country) {
        return (
            <div className={`${this.props.mode === "light" ? "" : "dark"} container`}>
                <p>Loading...</p>
            </div>
        )
    }
    return (
      <div className={`${this.props.mode === "light" ? "" : "dark"} container`}>
        <div
          onClick={this.goBack}
          className={`${
            this.props.mode === "light" ? "" : "dark_light"
          } country__btn`}
        >
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
          <p>Back</p>
        </div>
        
        <div className="country">
          <img
            alt={`Flag from ${this.state.country.name.common}`}
            src={this.state.country.flags.png}
          />
          <div className="country__container">
            <h2>{this.state.country.name.common}</h2>
            <div className="country__info">
              <div>
                <p>
                  <span>Native Name: </span>
                  {this.state.country.name.official}
                </p>
                <p>
                  <span>Population: </span>
                  {this.state.country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {this.state.country.region}
                </p>
                <p>
                  <span>Sub-Region: </span>
                  {this.state.country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {this.state.country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain:</span>{" "}
                  {this.state.country.tld}
                </p>
                {this.state.country.currencies && (
                  <p>
                    <span>Currencies: </span>
                    {Object.keys(this.state.country.currencies).map((c, i) => {
                        return(
                        <span className="span_light" key={i}>
                          {i === Object.keys(this.state.country.currencies).length - 1
                            ? this.state.country.currencies[`${c}`].name
                            : this.state.country.currencies[`${c}`].name + ","}
                        </span>
                      )})}
                  </p>
                )}
                {this.state.country.languages && (
                  <p>
                    <span>Languages: </span>
                    {Object.keys(this.state.country.languages).map((l, i) => (
                      <span className="span_light" key={i}>
                        {i === Object.keys(this.state.country.languages).length - 1
                          ? this.state.country.languages[`${l}`]
                          : this.state.country.languages[`${l}`] + ","}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              <div className="country__borders">
                {this.state.country.borders && (
                  <p>
                    <span className="block">Border Countries: </span>
                    {this.state.country.borders.map((b, i) => (
                      <span
                        className={`${
                          this.props.mode === "light" ? "" : "dark_light"
                        } country__border`}
                        key={i}
                      >
                        {b}{" "}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps)(Country);
