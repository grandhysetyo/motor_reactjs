import React from 'react'

function NavbarTop() {
    return (
        <>
            <nav className="navbar-top">
                <div className='container'>
                    <div className="navigation">                     
                        <div className="nav-menu menu">
                            <div className="item">
                                <a className="link active" href="/">Home</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">About</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">Help</a>
                            </div>
                            <div className="item">
                                <a className="link" href="/">Contact</a>
                            </div>
                        </div>  
                        <div className="nav-menu trans-user">
                            <div className="item dropdown">                                
                                <button className="dropbtn">English</button>
                                <div className="dropdown-content">
                                    <a href="/">Indonesia</a>                                                                        
                                </div>                                
                            </div>
                            <div className="item">
                                <a className="link" href="/"><i className="fas fa-user"></i> Hi, Username</a>
                            </div>                        
                        </div>
                    </div>                                      
                </div>
            </nav>

        </>
    )
}

export default NavbarTop;
