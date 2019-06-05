import React from 'react';

const Button = ({buttonName, className, handler}) => (
    <button type="button" className={className} onClick={handler}>{buttonName}</button>
);

export default Button;