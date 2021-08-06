import React, { Component } from 'react'
import Sidebar from '../../components/sidebar/sidebar';

class Detail extends Component {
    render() {
        return (
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'> 
                                <div className='row'>
                                    <div className="card-sidebar">
                                        <h5 className='titlesidebar'>Title Produk</h5>
                                        <div className='d-flex'>
                                            <img className='foto-produk' src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />                                           
                                            <div className='card-content content-detail'>
                                                <div className='title'>                        
                                                    <h5>Title Motor</h5>
                                                    <span><i className="fas fa-map-marker-alt"></i> Bandung</span>
                                                </div>                        
                                                <div className='detail'>     
                                                    <div>
                                                        <span><i className="fas fa-car"></i>Toyota</span>
                                                        <span><i className="fas fa-calendar-day"></i> 2021</span>
                                                        <span><i className="fas fa-cogs"></i>Automatic</span>
                                                        <span><i className="fas fa-tachometer-alt"></i>1.000 Miles</span>
                                                    </div>  
                                                    <div>
                                                        <span><i className="fas fa-car"></i>Toyota</span>
                                                        <span><i className="fas fa-calendar-day"></i> 2021</span>
                                                        <span><i className="fas fa-cogs"></i>Automatic</span>
                                                        <span><i className="fas fa-tachometer-alt"></i>1.000 Miles</span>
                                                    </div>                          
                                                </div>
                                                <div className='price'>
                                                    <h5>Rp. 200.000.000</h5>
                                                    <span>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </span>
                                                </div>
                                            </div> 
                                        </div>                                        
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="card-sidebar">
                                        <h5 className='titlesidebar'>Info</h5>                                        
                                            <div className='card-content'>
                                                <h6>Description</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                <h6>Description</h6>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>                                                                               
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>                                                                 
                                <Sidebar title='ONLINE SUPPORT' type='support'/>
                                <Sidebar title='ABOUT MOTOR' type='about'/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}
export default Detail;