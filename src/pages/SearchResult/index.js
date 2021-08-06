import React, { Component } from 'react'
import NavbarSort from '../../components/navbar-sorting/navbar-sorting'
import Pagination from '../../components/pagination/pagination';
// import SearchGrid from '../../components/search-grid/search-grid';
import SearchList from '../../components/search-list/search-list';
import Sidebar from '../../components/sidebar/sidebar';

class SearchResult extends Component {
    render() {
        return (
            <main>
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'> 
                                <NavbarSort />
                                <SearchList />
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
export default SearchResult;