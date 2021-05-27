import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="ui fixed menu">
            <Link to={`/`} className="ui container center">
                <h2>eStore</h2>
            </Link>
        </div>
    )
}

export default Header
