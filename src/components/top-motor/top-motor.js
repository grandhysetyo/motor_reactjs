import React from 'react'

function TopMotor() {
    return (
        <div className='top-motor'>                        
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-new-tab" data-toggle="tab" href="#nav-new" role="tab" aria-controls="nav-home" aria-selected="true">NEWS</a>
                    <a className="nav-link" id="nav-used-tab" data-toggle="tab" href="#nav-used" role="tab" aria-controls="nav-profile" aria-selected="false">USED</a>                    
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-new" role="tabpanel" aria-labelledby="nav-new-tab">
                    <div className='row'>
                        <div className='card-blog'>
                            <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                            <div className='blog-content'>
                                <h6>Card Blog Title</h6>
                                <span><i className="fas fa-calendar-day"></i> 2021</span>
                                <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span> 
                            </div>                                                       
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span>  
                                </div>                                                       
                            </div>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                    <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span> 
                                </div>                                                       
                            </div>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                    <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span>  
                                </div>                                                       
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                    <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span>   
                                </div>                                                       
                            </div>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                    <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span>  
                                </div>                                                       
                            </div>
                            <div className='card-blog'>
                                <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                                <div className='blog-content'>
                                    <h6>Card Blog Title</h6>
                                    <span><i className="fas fa-calendar-day"></i> 2021</span>
                                    <span><i className="far fa-money-bill-alt"></i> Rp. 202.000.000</span>   
                                </div>                                                       
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="tab-pane fade" id="nav-used" role="tabpanel" aria-labelledby="nav-used-tab">
                    <p>No Data</p>
                </div>                
            </div>            
        </div>
    )
}

export default TopMotor;
