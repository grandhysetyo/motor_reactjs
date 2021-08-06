import React from 'react'

function Banner() {
    return (
        <>
            <div className="container">
                <div className="banner">
                    <div className="row">
                        <div className="col-md-6">
                            <img src='' alt="" className='hero-banner'/>
                        </div>
                        <div className="col-md-6">
                            <div className="txt-banner ml-auto">
                                <h1>Lets Find Motor!!</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn btn-danger btn-lg">Visit Mobile Version</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Banner;
