import React from 'react'
import logo from '../../assets/images/logo.png';

function NavbarBottom() {
    return (
        <>        
            <nav className="navbar-bottom navbar navbar-expand-lg navbar-light">
                <div className='container'>
                    <a href="/" className="navbar-brand"><img src={logo} alt='' /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Buy <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">News</a>
                            </li>                        
                        </ul>
                        <div className="d-flex ml-auto">
                            <button type="button" className="btn btn-success btn-md px-5 py-3 font-weight-bold"><i className="fas fa-plus"></i> ADD LISTING</button>
                        </div>
                    </div>
                </div>
              </nav>      
        </>
    )
}

export default NavbarBottom;
