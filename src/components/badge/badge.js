import React, { Component } from 'react';
import propTypes from 'prop-types';

class ClrBadge extends Component {
   render() {
      return (
         <span className={'badge ' + this.props.className}>
            {this.props.number}
         </span>
      );
   }
}

ClrBadge.propTypes = {
   number: propTypes.number.isRequired,
   className: propTypes.string
};

ClrBadge.defaultProps = {
   className: ''
};

export default ClrBadge;
