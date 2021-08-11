import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDataBySlug } from '../../config/redux/action';
import Sidebar from '../../components/sidebar/sidebar';
import Rating from '../../components/rating/rating';

class Detail extends Component {
    state  = {
        vehicle:{}
    }
    componentDidMount(){
        const slug = this.props.match.params.slug;
        this.loadData(slug);                
    }
    loadData = async (slug) => {        
        const res = await this.props.getDataBySlug(slug).catch(err => err); 
        if(res.status===200){            
            this.setState({                
                vehicle: res.data
            })
        }else{
            console.log(res);
        }
    }
    render() {
        const { vehicle } = this.state;       
        return (
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-8'> 
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card-sidebar">
                                            <h5 className='titlesidebar'>{vehicle.brand}</h5>
                                            <div className='content'>                                        
                                                <img className='foto-produk' src={'/assets/images/'+vehicle.urlPhoto} alt='' />                                           
                                                <div className='card-content content-detail'>
                                                    <div className='title'>                        
                                                        <h5>{vehicle.title}</h5>
                                                        <span><i className="fas fa-map-marker-alt"></i> {vehicle.location}</span>
                                                    </div>                        
                                                    <div className='detail'>     
                                                        <div>
                                                            <span><i className="fas fa-car"></i> {vehicle.model}</span>
                                                            <span><i className="fas fa-certificate"></i> {vehicle.condition}</span>
                                                            <span><i className="fas fa-cogs"></i>{vehicle.transmision}</span>
                                                            <span><i className="fas fa-tachometer-alt"></i>{vehicle.mileage} Miles</span>
                                                        </div>  
                                                        <div>
                                                            <span><i className="fas fa-tint"></i>{vehicle.fuel}</span>
                                                            <span><i className="fas fa-palette"></i>Ex: {vehicle.exterior}</span>
                                                            <span><i className="fas fa-palette"></i>In: {vehicle.interior}</span>                                                        
                                                        </div>                          
                                                    </div>
                                                    <div className='price'>
                                                        <h5>Rp. {vehicle.price}</h5>
                                                        <span>                                                                                                                        
                                                            <Rating rating={vehicle.rating} />
                                                        </span>
                                                    </div>
                                                </div> 
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="card-sidebar">
                                            <h5 className='titlesidebar'>Info</h5>                                        
                                                <div className='card-content'>
                                                    <h6>Condition</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                    <h6>Description</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>                                                                               
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-4'>                                                                 
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
const reduxState = (state) => {
    return{
        vehicles: state.data
    }
}
const reduxDispatch = (dispatch) => {
    return{
        getDataBySlug: (slug) => dispatch(getDataBySlug(slug)),        
    }
}
export default connect(reduxState,reduxDispatch)(Detail);