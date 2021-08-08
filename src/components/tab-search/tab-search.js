import React, {  } from 'react'
import { category, filterData } from '../../config/data/category';
import { useSelector, useDispatch } from "react-redux";
import { useHistory  } from 'react-router';
import { Brand, Model } from '../select-option/option';


function TabSearch() {
    const stateCategory = useSelector((state) => state.category);   
    const filter = useSelector((state) => state.filterData);
    const dispatch = useDispatch();
    let history = useHistory();

    const handleCategory = (selected) => {
        console.log(selected);
        dispatch({type: 'CHANGE_CATEGORY' , value: selected})
    }   
    const handleSearch = (e) => {        
        dispatch({type: 'CHANGE_FILTER' , 
            value: {
                model: e.target.model.value,
                condition: e.target.used.checked ? 'Used': e.target.new.checked ? 'New' : '' ,
                photo: e.target.photo.checked ? 'true' : 'false',
                video: e.target.video.checked ? 'true' : 'false',
                location: e.target.location.value,
                brand: e.target.brand.value,
                transmision: e.target.transmision.value,                
                fuel: '',
                exterior:'',
                interior:'',                
            }
        });
        dispatch({type: 'CHANGE_PRICE' , 
            value: {
                price1: e.target.price1.value,
                price2: e.target.price2.value,
            }
        }) 
        e.preventDefault();
        history.push('/search')
    }
    console.log(filter);
    return (
        <div className='tab-search'>
            <nav>
                <div className="nav nav-tabs" role="tablist">
                    <a className="nav-link active" id="nav-search-tab" data-toggle="tab" href="#nav-search" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-search"></i> SEARCH</a>
                    <a className="nav-link" id="nav-listing-tab" data-toggle="tab" href="#nav-listing" role="tab" aria-controls="nav-listing" aria-selected="false"><i className="fas fa-plus"></i> ADD LISTING</a>                    
                </div>
            </nav>
            <div className="tab-content" >
                <div className="tab-pane fade show active" id="nav-search" role="tabpanel" aria-labelledby="nav-search-tab">
                    <form onSubmit={(e) => handleSearch(e)}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="category">CATEGORY</label>
                                <select id="category" name='category' className="form-control" onChange={({ target: {value} }) => handleCategory(value)}>
                                    <option value=''>All CATEGORY</option>
                                    {category.map((data, idx) => 
                                        <option selected={stateCategory === data.toLowerCase()} value={idx} key={idx}>
                                        {data}
                                        </option>                            
                                    )}                                    
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="model">MODEL</label>
                                <select id="model" name='model' className="form-control">                                    
                                    <Model category={stateCategory} selected='All'/>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div className="form-check form-check-inline">                                                            
                                    <input className="form-check-input" type="radio" name="condition" id="used" />
                                    <label className="form-check-label" htmlFor="used">Used Item</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="condition" id="new" />
                                    <label className="form-check-label" htmlFor="new">New Item</label>
                                </div>                                                        
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="photo" value='true'/>
                                    <label className="form-check-label" htmlFor="photo">With photos</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="video" value='true'/>
                                    <label className="form-check-label" htmlFor="video">With Video</label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="location">LOCATION</label>
                                <select id="location" name='location' className="form-control">
                                    <option selected value=''>All</option>
                                    {filterData.location.map((data, idx)=> 
                                        <option value={data} key={idx}>{data}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="brand">BRAND</label>
                                <select id="brand" className="form-control">                                    
                                    <Brand category={stateCategory} selected='All'/>
                                </select>
                            </div>                            
                            <div className="form-group col-md-4">
                                <label htmlFor="transmision">TRANSMISION</label>
                                <select id="transmision" className="form-control">
                                    <option selected value=''>All</option>
                                    {filterData.transmision.map((data, idx)=> 
                                        <option value={data} key={idx}>{data}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>PRICE</label>
                                <div className="form-row">
                                    <div className='col-md-6'>
                                        <select id="price1" className="form-control">
                                            <option selected value=''>All</option>
                                            {filterData.price.map((data, idx)=> 
                                                <option value={data} key={idx}>{data}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <select id="price2" className="form-control">
                                            <option selected value=''>All</option>
                                            {filterData.price.map((data, idx)=> 
                                                <option value={data} key={idx}>{data}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>                                
                            <div className="form-group col-md-6">
                                <label htmlFor="type"></label>
                                <div className="form-row">
                                    <div className='col-md-6'>                                        
                                    </div>
                                    <div className='col-md-6'>
                                        <button className="btn btn-warning btn-lg d-block w-100 font-weight-bold">SEARCH</button>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        
                    </form>
                </div>
                <div className="tab-pane fade" id="nav-listing" role="tabpanel" aria-labelledby="nav-listing-tab">...</div>                
            </div>
        </div>
    )
}

export default TabSearch;
