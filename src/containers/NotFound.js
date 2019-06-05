import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
    <div className="not-found-wrapper">
        <Link to="/">Return to Main page</Link>
        <h1>404: Not Found</h1>
    </div>
);

export default NotFound;