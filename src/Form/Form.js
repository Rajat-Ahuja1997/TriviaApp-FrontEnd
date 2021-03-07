import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submit} id="form1">
                    <div id="inputForm">
                        <input 
                            pattern="[\d]{10}" 
                            placeholder="Enter 10-digit number" 
                            value={this.props.value} 
                            onChange={this.props.change} 
                            title="Phone number should match a 10-digit format (ex: 1234567890)"
                            id="inputBar"
                        />
                    </div>
                </form>
                <button id="inputButton" type="submit" class="btn btn-primary" form="form1">Submit</button>
            </div>
        );
    }
}

Form.propTypes = {
    change: PropTypes.func,
    submit: PropTypes.func
}

export default Form;