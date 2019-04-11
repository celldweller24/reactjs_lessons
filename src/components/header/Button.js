import React from 'react';

const Button = ({buttonName, className}) => (
    <button className={className}>{buttonName}</button>
);

// class Button extends React.Component {
//     render() {
//         return React.createElement('button', { className: this.props.className }, this.props.buttonName);
//     }
// }

export default Button;