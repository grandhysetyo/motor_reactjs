import React from 'react'
import user from '../../assets/images/user.png'
import { category, filterData } from '../../config/data/category';
import { useSelector, useDispatch } from "react-redux";
import {Brand, Model } from '../select-option/option';

const Content = (props)=> {
    const type = props.type;
    const stateCategory = useSelector((state) => state.category);
    const stateFilter = useSelector((state) => state.filterData);
    const dispatch = useDispatch();
    
    const handleCategory = (selected) => {        
        dispatch({type: 'CHANGE_CATEGORY' , value: selected})        
    }
    const handleChange = (e) => {             
        dispatch({type: 'CHANGE_FILTER' , 
            value: {
                model: e.target.id==='model' ? e.target.value : stateFilter.model,
                condition: e.target.id ==='used' ? 'Used': e.target.id ==='new' ? 'New' : '' ,
                photo: e.target.id ==='photo' ? e.target.value : stateFilter.photo,
                video: e.target.id ==='video' ? e.target.value : stateFilter.video,
                location: e.target.id==='location' ? e.target.value : stateFilter.location,
                brand: e.target.id==='brand' ? e.target.value : stateFilter.brand,
                transmision: e.target.id==='transmision' ? e.target.value : stateFilter.transmision,
                price1: e.target.id==='price1' ? e.target.value : stateFilter.price1,
                price2: e.target.id==='price2' ? e.target.value : stateFilter.price2,
                mileage1: e.target.id==='mileage1' ? e.target.value : stateFilter.mileage1,
                mileage2: e.target.id==='mileage2' ? e.target.value : stateFilter.mileage2,
                fuel: e.target.id==='fuel' ? e.target.value : stateFilter.fuel,
                exterior: e.target.id==='exterior' ? e.target.value : stateFilter.exterior,
                interior: e.target.id==='interior' ? e.target.value : stateFilter.interior,
            }
        });
    }
    if (type==='categories') {
        return(
            <ul className='category'>
                <li><i className="fas fa-car"></i> Cars</li>
                <li><i className="fas fa-motorcycle"></i> Motor</li>
            </ul>
        )
    }else if(type==='about'){
        return(
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
        )
    }else if(type==='support'){
        return(
            <ul>
                <li className='d-flex'>
                    <img src={user} alt='' />
                    <div>
                        <h6 className='font-weight-bold'>My Name Foo</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    
                </li>
                <li>
                    <button className='btn btn-primary btn-lg'><i className="fas fa-phone-alt"></i> +6281230987127</button>
                </li>
            </ul>
        )
    }else if(type==='search'){
        return(
            <ul>
                <li>
                    <label htmlFor="category">CATEGORY</label>
                    <select id="category" name="category" className="form-control" onChange={({ target: {value} }) => handleCategory(value)}>
                        <option value=''>All CATEGORY</option>
                        {category.map((data, idx) => 
                            <option selected={stateCategory === idx.toString()} value={idx} key={idx}>
                            {data}
                            </option>                            
                        )} 
                    </select>
                </li>
                <li>
                    <div className="form-check form-check-inline">                                                            
                        <input className="form-check-input" type="radio" name="condition" id="used" checked={stateFilter.condition === 'Used' ? 'checked' : ''} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="used">Used Item</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="condition" id="new"  checked={stateFilter.condition === 'New' ? 'checked' : ''} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="new">New Item</label>
                    </div>
                </li>
                <li>
                    <label htmlFor="model">MODEL</label>
                    <select id="model" name='model' className="form-control" onChange={(e)=> handleChange(e)}>
                        <Model category={stateCategory} selected={stateFilter.model}/>
                    </select>
                </li>
                <li>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="photo" value='true' checked={stateFilter.photo === 'true' ? true : false} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="photo">With photos</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="video" value='true' checked={stateFilter.video === 'true' ? true : false} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="video">With Video</label>
                    </div>
                </li>
                <hr/>
                <li>
                    <label htmlFor="location">LOCATION</label>
                    <select id="location" name='location' className="form-control" onChange={(e)=> handleChange(e)}>
                        <option selected value=''>All</option>
                        {filterData.location.map((data, idx)=> 
                            <option selected={stateFilter.location.toLowerCase() === data.toLowerCase()} value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="brand">BRAND</label>
                    <select id="brand" name='brand' className="form-control" onChange={(e)=> handleChange(e)}>
                        <Brand category={stateCategory} selected={stateFilter.brand}/>
                    </select>
                </li>                
                <li>
                    <label>PRICE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="price1" name='price1' className="form-control" onChange={(e)=> handleChange(e)}>
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="price2" name='price2' className="form-control" onChange={(e)=> handleChange(e)}>
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                    </div>
                </li>
                <hr />
                <li>
                    <label htmlFor="transmision">TRANSMISION</label>
                    <select id="transmision" name="transmision" className="form-control" onChange={(e)=> handleChange(e)}>
                        <option selected value=''>All</option>
                        {filterData.transmision.map((data, idx)=> 
                            <option selected={stateFilter.transmision.toLowerCase() === data.toLowerCase()} value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="fuel">FUEL</label>
                    <select id="fuel" name="fuel" className="form-control" onChange={(e)=> handleChange(e)}>
                        <option selected value=''>All</option>
                        {filterData.fuel.map((data, idx)=> 
                            <option selected={stateFilter.fuel.toLowerCase() === data.toLowerCase()} value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>                
                <li>
                    <label>MILEAGE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="mileage1" name='mileage1' className="form-control" onChange={(e)=> handleChange(e)}>
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="mileage2" name='mileage2' className="form-control" onChange={(e)=> handleChange(e)}>
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li>
                    <label htmlFor="exterior">EXTERIOR COLOR</label>
                    <select id="exterior" name="exterior" className="form-control" onChange={(e)=> handleChange(e)}>
                        <option selected value=''>All</option>
                        {filterData.exterior.map((data, idx)=> 
                            <option selected={stateFilter.exterior.toLowerCase() === data.toLowerCase()} value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="interior">INTERIOR COLOR</label>
                    <select id="interior" name="interior" className="form-control" onChange={(e)=> handleChange(e)}>
                        <option selected value=''>All</option>
                        {filterData.interior.map((data, idx)=> 
                            <option selected={stateFilter.interior.toLowerCase() === data.toLowerCase()} value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <hr/>
            </ul>
        )
    }
    
}

function Sidebar(props) {
    return (
        <div className="card-sidebar">
            <h5 className='titlesidebar'>{props.title}</h5>
            <div className="card-content">
                <Content type={props.type}/>
            </div>
        </div>
    )
}

export default Sidebar;
