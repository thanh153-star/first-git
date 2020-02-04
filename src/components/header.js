import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a href="status" className="navbar-brand" >
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo" className="mr-4" />
                    Logo
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="foo" className="nav-link">Facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="foo">Youtube</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="foo" id="navbardrop" data-toggle="dropdown">
                            More
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="foo">Fake</a>
                            <a className="dropdown-item" href="foo">Fake 2</a>
                            <a className="dropdown-item" href="foo">Fake 3</a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;

