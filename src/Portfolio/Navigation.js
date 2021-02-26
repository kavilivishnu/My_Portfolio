import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="background">
            <nav className="navigation">
                <Link to="/About" className="nav">
                    About Me
            </Link>
                <Link to="/WorkSamples" className="nav">
                    Work Samples
            </Link>
            </nav>
        </div>
    )
}

export default Navigation;
