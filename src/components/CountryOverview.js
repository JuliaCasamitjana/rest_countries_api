import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const CountryOverview = (props) => (
    <div className={`${props.mode==="light" ? "" : "dark_light"} desktop__country__box`}>
        <Link to={{
            pathname:`/${props.info.name.replace(' ', '%20')}`, 
            props: props.info
        }}>
        <img alt={`Flag from ${props.info.name}`} src={props.info.flag} />
        <div>
            <h2>{props.info.name}</h2>
            <p><span>Population: </span>{props.info.population}</p>
            <p><span>Region: </span>{props.info.region}</p>
            <p><span>Capital: </span> {props.info.capital}</p>
        </div>
        </Link>
    </div>
)



const mapStateToProps = (state) => {  
    return {      
       mode: state  
    };
  } 
  
  export default connect(mapStateToProps)(CountryOverview);