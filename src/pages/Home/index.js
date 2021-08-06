import React, { Component } from 'react'
import Banner from '../../components/banner/banner'
import Sidebar from '../../components/sidebar/sidebar'
import TabSearch from '../../components/tab-search/tab-search'
import TopMotor from '../../components/top-motor/top-motor'

class Home extends Component {
    render() {
        return (
            <main>
                <Banner />
                <section>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-md-8'>                            
                                <TabSearch />
                                <TopMotor />
                            </div>
                            <div className='col-md-4'>
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
export default Home;
