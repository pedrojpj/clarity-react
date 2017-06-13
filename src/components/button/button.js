import React, { Component } from 'react';
import propTypes from 'prop-types';

class ClrButton extends Component {
   render() {
      return (
         <button
            className={'btn ' + this.props.className}
            type={this.props.type}
            onClick={this.props.onClick}
            name={this.props.name}
            disabled={this.props.disabled}
         >
            {this.props.children}
         </button>
      );
   }
}

ClrButton.propTypes = {
   onClick: propTypes.func,
   disabled: propTypes.bool,
   name: propTypes.string,
   className: propTypes.string
};

ClrButton.defaultProps = {
   onClick: () => {},
   type: 'button',
   className: ''
};

export default ClrButton;
