import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input 
                    pattern="[\d]{10}" 
                    placeholder="Enter 10-digit number" 
                    value={this.props.value} 
                    onChange={this.props.change} 
                    title="Phone number should match a 10-digit format (ex: 1234567890)"
                />
                <input type="submit" value="Enter" />
            </form>
        );
    }
}

Form.propTypes = {
    change: PropTypes.func,
    submit: PropTypes.func
}

export default Form;