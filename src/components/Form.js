import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        search: ''
    }
    render() {
        return (
        <form>
            <input type="text" id="text" onChange={this.handleChange} value={this.state.search}/>
            <button type="submit" id="search" onClick={this.handleSubmit}>Search</button>
        </form>
        );
    }
    handleChange = ({target: {value: search}}) => {
        this.setState({
            search
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateCurrentSearch(this.state.search)
        this.setState({
            search: ""
        })
    }
}

Form.propTypes = {

};

export default Form
