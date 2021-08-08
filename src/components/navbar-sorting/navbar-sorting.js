import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function NavbarSort() {
    const stateView = useSelector((state) => state.viewType);
    const stateSort = useSelector((state) => state.sortType);
    const dispatch = useDispatch();

    const classBtnList = stateView==='List'? 'btn btn-danger mr-2' : 'btn btn-secondary mr-2';
    const classBtnGrid = stateView==='Grid'? 'btn btn-danger' : 'btn btn-secondary';

    const handleGridButton = () => {
        dispatch({type: 'CHANGE_VIEW', value: 'Grid'})
    }
    const handleListButton = () => {
        dispatch({type: 'CHANGE_VIEW', value: 'List'})
    }
    const handleSort = (selected) => {
        dispatch({type: 'CHANGE_SORT', value: selected})
    }
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
                            <select className="form-control" onChange={({ target: {value} }) => handleSort(value)}>
                                <option value='' selected={stateSort === '' ? 'selected': ''}>Choose type sort</option>                              
                                <option value='asc' selected={stateSort === 'asc' ? 'selected': ''}>Lowest to Highest</option>
                                <option value='dsc' selected={stateSort === 'dsc' ? 'selected': ''}>Highest to Lowest</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div className='ml-auto'>
                        <button className={classBtnList} onClick={handleListButton}><i className="fas fa-list-ul"></i></button>
                        <button className={classBtnGrid} onClick={handleGridButton}><i className="fas fa-th-large"></i></button>
                    </div>                    
                </div>
            </div>            
        </>
    )
}

export default NavbarSort
