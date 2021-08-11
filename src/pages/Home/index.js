import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDataTop } from '../../config/redux/action';


import Banner from '../../components/banner/banner'
import Sidebar from '../../components/sidebar/sidebar'
import TabSearch from '../../components/tab-search/tab-search'
import TopMotor from '../../components/top-motor/top-motor'

class Home extends Component {
    state= {
        topNewsVehicle: {},
        topUsedVehicle: {}
    }    
    componentDidMount() {        
        this.loadDataTop(5, 'New');
        this.loadDataTop(5, 'Used');
    }
    loadDataTop = async (rating, condition) => {
        const res = await this.props.getDataTop(rating, condition).catch(err => err); 
        if(res.status===200){
            if(condition === 'New'){
                this.setState({                
                    topNewsVehicle: res.data
                })
            }else{
                this.setState({                
                    topUsedVehicle: res.data
                })
            }            
        }else{
            console.log(res);
        }
    }
    render() {
        const { topUsedVehicle, topNewsVehicle } = this.state;
        return (
            <main>
                <Banner />
                <section>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-md-12 col-lg-8'>                            
                                <TabSearch />
                                <TopMotor New={topNewsVehicle} Used={topUsedVehicle} />
                            </div>
                            <div className='col-md-12 col-lg-4'>
                                <Sidebar title='CATEGORIES' type='categories'/>                            
                                <Sidebar title='ONLINE SUPPORT' type='support'/>
                                <Sidebar title='ABOUT MOTOR' type='about'/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='download-now'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h2>DOWNLOAD NOW</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <button className='btn btn-success btn-lg'>Download</button>
                            </div>                            
                        </div>
                    </div>
                </section>                
            </main>
        )
    }
}
const reduxState = (state) => {
    return {
        filterData: state.filterData
    }
} 
const reduxDispatch = (dispatch) => {
    return {
        getDataTop: (rating, condition) => dispatch(getDataTop(rating, condition)),        
    }
}
export default connect(reduxState, reduxDispatch)(Home);
