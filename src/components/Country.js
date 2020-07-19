import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Country extends React.Component {

    state={
        country:{},
        borders:[]

    }

    componentDidMount= () =>{
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params.id}`).then((res)=>{
            this.setState({country: res.data[0]}
            )
        })
    }

    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        return(
            <div className={`${this.props.mode==="light" ? "" : "dark"} container`}>
               <div onClick={this.goBack} className={`${this.props.mode==="light" ? "" : "dark_light"} country__btn`}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <p>Back</p>
                </div>
                
                <div className="country">
                    <img alt={`Flag from ${this.state.country.name}`} src={this.state.country.flag} />
                    <div className="country__container">
                        <h2>{this.state.country.name}</h2>
                        <div className="country__info">
                            <div>
                                <p><span>Native Name: </span>{this.state.country.nativeName}</p>
                                <p><span>Population: </span>{this.state.country.population}</p>
                                <p><span>Region: </span>{this.state.country.region}</p>
                                <p><span>Sub-Region: </span>{this.state.country.subregion}</p>
                                <p><span>Capital: </span>{this.state.country.capital}</p>
                            </div>
                            <div>
                                <p><span>Top Level Domain:</span> {this.state.country.topLevelDomain}</p>
                                {this.state.country.currencies && <p><span>Currencies: </span>{this.state.country.currencies.map((c, i)=>{
                                    return <span className="span_light" key={i}> {i===this.state.country.currencies.length-1 ? c.name : c.name + ',' } </span>
                                    })}
                                </p>}
                                {this.state.country.languages && <p><span>Languages: </span>{this.state.country.languages.map((l, i)=>
                                        <span className="span_light" key={i}> {i===this.state.country.languages.length-1 ? l.name : l.name + ',' } </span>
                                    )}
                                </p>}
                            </div>
                        
                            <div className="country__borders">
                                {this.state.country.borders && <p><span className="block">Border Countries: </span>
                                    {this.state.country.borders.map((b,i)=>
                                            <span className={`${this.props.mode==="light" ? "" : "dark_light"} country__border`} key={i}>{b} </span>
                                        )}
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>
                        
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return {      
       mode: state  
    };
  } 
  
  export default connect(mapStateToProps)(Country);