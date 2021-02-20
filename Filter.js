import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Filter extends Component{
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    this.props.onFilter({
         [name]: value
    });
}

    render(){
    return(
        <div style={{marginTop: 25}}  className="searchform"> 
        <input size='25' id='searchText' type='text' placeholder='Search for Name...' name="filterText" onChange={this.handleChange}  /> 
        <div> &nbsp; </div>
        </div>
    );
    }
}

export default Filter;
