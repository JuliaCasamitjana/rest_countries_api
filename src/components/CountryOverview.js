import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const CountryOverview = (props) => (
  <div
    className={`${
      props.mode === "light" ? "" : "dark_light"
    } desktop__country__box`}
  >
    <Link
      to={{
        pathname: `/${props.info.name.common.replace(/\s/g, "%20")}`,
        props: props.info,
      }}
    >
      <img alt={`Flag from ${props.info.name.common}`} src={props.info.flags.png} />
      <div>
        <h2>{props.info.name.common}</h2>
        <p>
          <span>Population: </span>
          {props.info.population}
        </p>
        <p>
          <span>Region: </span>
          {props.info.region}
        </p>
        <p>
          <span>Capital: </span> {props.info.capital}
        </p>
      </div>
    </Link>
  </div>
);

const mapStateToProps = (state) => {
  return {
    mode: state,
  };
};

export default connect(mapStateToProps)(CountryOverview);
