import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../config/redux/action';
import NavbarSort from '../../components/navbar-sorting/navbar-sorting'
import Pagination from '../../components/pagination/pagination';
import SearchGrid from '../../components/search-grid/search-grid';
import SearchList from '../../components/search-list/search-list';
import Sidebar from '../../components/sidebar/sidebar';

class SearchResult extends Component {   
    state= {
        currentPage: 1,
        vehiclePerPage:9,
        vehicle: []
    } 
    componentDidMount() {        
        const { filter, category } = this.props;           
        this.loadData(filter,category);   
                            
    }
    componentDidUpdate(prevProps){
        const { filter, category, price, mileage, sortType } = this.props;  
        if(prevProps.category !== category || prevProps.filter !== filter){
            this.loadData(filter,category);                     
        }
        if(prevProps.sortType !== sortType){
            this.sortPrice(sortType);
        }       
        if(prevProps.price !== price){
            this.filterPrice(price);            
        }
        if(prevProps.mileage !== mileage){
            this.filterMileage(mileage);            
        }
    }
    loadData = async (filter,category) =>{
        const res = await this.props.getData(filter, category).catch(err => err); 
        if(res.status===200){
            this.setState({
                currentPage: 1,
                vehicle: this.props.data
            })
        }else{
            console.log(res);
        }
    }
    updatePaginate = (e,page) =>{        
        this.setState({
            currentPage: page
        })        
        e.preventDefault()
    } 
    sortPrice = (sortType) => {
        if(sortType === 'asc'){
            
            this.setState({
                vehicle: this.props.data.sort(function(a, b){return a.price - b.price})
            })
        }else if(sortType=== 'dsc'){
            this.setState({
                vehicle: this.props.data.sort(function(a, b){return b.price - a.price})
            })
        }
    }   
    filterPrice = (price)=>{        
        if(price.price1!=="" && price.price2!==""){
            this.setState({
                vehicle: this.props.data.filter((el) => el.price >= price.price1 && el.price <= price.price2)
            })
        }else if(price.price1!==''){
            this.setState({
                vehicle: this.props.data.filter((el) => el.price >= price.price1)
            })
        }else if(price.price2!==''){
            this.setState({
                vehicle: this.props.data.filter((el) => el.price <= price.price2)
            })
        }else{
            this.setState({                    
                vehicle: this.props.data
            })
        }                    
    }
    filterMileage = (mileage)=>{        
        if(mileage.mileage1!=='' && mileage.mileage2!==''){
            this.setState({
                vehicle: this.props.data.filter((el) => el.mileage >= mileage.mileage1 && el.mileage <= mileage.mileage2)
            })
        }else if(mileage.mileage1!==''){
            this.setState({
                vehicle: this.props.data.filter((el) => el.mileage >= mileage.mileage1)
            })
        }else if(mileage.mileage2!==''){
            this.setState({
                vehicle: this.props.data.filter((el) => el.mileage <= mileage.mileage2)
            })
        }else{
            this.setState({                    
                vehicle: this.props.data
            })
        }
        
    }
    render() {
        const { viewType} = this.props;
        const indexOfLastVehicle = this.state.currentPage * this.state.vehiclePerPage;
        const indexOfFirstPost = indexOfLastVehicle - this.state.vehiclePerPage;
        const currentVehicle = this.state.vehicle.slice(indexOfFirstPost, indexOfLastVehicle)
       
        let view;

        if(viewType ==='List'){
            view = <SearchList data={currentVehicle}/>
        } else{
            view = <SearchGrid data={currentVehicle}/>
        }
        return (
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-lg-8'> 
                                <NavbarSort />
                                <Pagination 
                                    vehiclePerPage={this.state.vehiclePerPage} 
                                    totalVehicle={this.state.vehicle.length} 
                                    paginate={this.updatePaginate}
                                    activePage={this.state.currentPage}/>
                                {view}                                
                                <Pagination 
                                    vehiclePerPage={this.state.vehiclePerPage} 
                                    totalVehicle={this.state.vehicle.length} 
                                    paginate={this.updatePaginate}
                                    activePage={this.state.currentPage}/>
                                
                            </div>
                            <div className='col-md-12 col-lg-4'> 
                                <Sidebar title='SEARCH FILTER' type='search'/>                                                          
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
const reduxState = (state)=>{
    return {
        viewType: state.viewType,
        sortType: state.sortType,
        price: state.price,
        mileage: state.mileage,
        filter: state.filterData,
        category: state.category,
        data: state.data,
    }
}
const reduxDispatch = (dispatch) => {
    return{
        getData: (filter, category, sortType) => dispatch(getData(filter, category, sortType)),        
    }
}
export default connect(reduxState,reduxDispatch)(SearchResult);