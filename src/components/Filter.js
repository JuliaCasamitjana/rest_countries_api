import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

const options = [
    { value: 'africa', label: 'Africa' },
    { value: 'americas', label: 'America' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ]


class Filter extends React.Component {

    filterRegion =(e)=>{
        let region = e.value
        this.props.handleFilter(region)
    }

    render() {

      const colourStyles = {
        indicatorSeparator: (styles) => ({...styles, display:'none'}),
        control: styles => (this.props.mode==="light" ? 
              { ...styles, border: 'none', backgroundColor: 'white', padding: '.5rem', boxShadow: 'none' } 
              : 
              { ...styles, border: 'none', backgroundColor: '#2b3945', padding: '.5rem', boxShadow: 'none'}),
        singleValue: styles => (this.props.mode==="light" ? { ...styles, color: '#000'} : { ...styles, color: '#fff'}),
        placeholder: styles => (this.props.mode==="light" ? { ...styles, color: '#000'} : { ...styles, color: '#fff'}),
        dropdownIndicator: styles => (this.props.mode==="light" ? { ...styles, color: '#000'} : { ...styles, color: '#fff'}),
        option: (styles, {isFocused}) => (this.props.mode==="light" ? 
              { ...styles,backgroundColor: isFocused ? 'lightgrey': 'white', color: 'black'  } 
              :
              { ...styles, backgroundColor: isFocused ? '#111517': '#2b3945'}),
        menuList: styles => ({ ...styles, paddingTop: 0, paddingBottom: 0})

      };

        return(
          <div className="desktop__filter">
            <Select 
                options={options} 
                // className={`${this.props.mode==="light" ? "" : "dark_light"} react-select-co`}
                placeholder="Filter by Region"
                isSearchable
                isFocused
                onChange={this.filterRegion}
                styles={colourStyles}
                />
          </div>
        )
    }
}


const mapStateToProps = (state) => {  
    return {      
       mode: state  
    };
  } 
  
  export default connect(mapStateToProps)(Filter);