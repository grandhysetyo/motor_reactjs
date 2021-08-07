import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../../config/redux/action';
import NavbarSort from '../../components/navbar-sorting/navbar-sorting'
import Pagination from '../../components/pagination/pagination';
import SearchGrid from '../../components/search-grid/search-grid';
import SearchList from '../../components/search-list/search-list';
import Sidebar from '../../components/sidebar/sidebar';

class SearchResult extends Component {    
    componentDidMount() {        
        const { filter, category, sortType } = this.props;
        this.props.getData(filter, category, sortType)        
    }
    componentDidUpdate(prevProps){
        const { filter, category, sortType } = this.props;        
        if(prevProps.category !== category || prevProps.filter !== filter || prevProps.sortType !== sortType){            
            this.props.getData(filter, category, sortType) 
        }        
    }
    render() {
        const { viewType, data} = this.props;
        let view;

        if(viewType ==='List'){
            view = <SearchList data={data}/>
        } else{
            view = <SearchGrid data={data}/>
        }
        return (
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'> 
                                <NavbarSort />
                                {view}
                                <div className='row'>
                                    <Pagination />
                                </div>
                            </div>
                            <div className='col-md-4'> 
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