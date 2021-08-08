import React from 'react'
import logo from '../../assets/images/logo.png';

function FooterBottom() {
    return (
        <div className='footer-bottom'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='container'>
                    <a href="/" className="navbar-brand"><img src={logo} alt='' /></a>
                    
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">News</a>
                            </li>                        
                        </ul>
                        <div className="d-flex ml-auto">
                            <div className='card-sosmed'>
                                <a href='/' className='active'><i className="fab fa-instagram"></i></a>
                                <a href='/'><i className="fab fa-linkedin-in"></i></a>
                                <a href='/'><i className="fab fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default FooterBottom
