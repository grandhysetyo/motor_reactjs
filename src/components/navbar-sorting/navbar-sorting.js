import React from 'react'
import Pagination from '../pagination/pagination'

function NavbarSort() {
    return (    
        <>    
            <div className='row mt-5'>
                <div className='col-md-5 '>
                    <h5>SEARCH RESULT</h5>
                </div>
                <div className='col-md-5'>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-md-4 col-form-label">Sort by</label>
                        <div className="col-md-8">
                            <select class="form-control">
                                <option>Price</option>
                                <option>10.000.000 - 30.000.000</option>
                                <option>30.000.000 - 40.000.000</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='ml-auto'>
                    <button className='btn btn-danger mr-2'><i className="fas fa-list-ul"></i></button>
                    <button className='btn btn-secondary'><i className="fas fa-th-large"></i></button>
                    </div>
                    
                </div>
            </div>
            <div className='row'>
                <Pagination />
            </div>
        </>
    )
}

export default NavbarSort
