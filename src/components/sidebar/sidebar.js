import React from 'react'
import user from '../../assets/images/user.png'
import { category, filterData } from '../../config/data/category';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Brand, Model } from '../select-option/option';

const Content = (props)=> {
    const type = props.type;
    const history = useHistory();
    const stateCategory = useSelector((state) => state.category);
    const stateMileage = useSelector((state) => state.mileage);
    const statePrice = useSelector((state) => state.price);
    const stateFilter = useSelector((state) => state.filterData);

    const dispatch = useDispatch();
    
    const handleCategory = (selected) => {        
        dispatch({type: 'CHANGE_CATEGORY' , value: selected})        
    }
    const handleCategory2 = (selected,e) => {        
        dispatch({type: 'CHANGE_CATEGORY' , value: selected})
        e.preventDefault();    
        history.push('/search')   
    }
    const handleMileage = (e) => {       
        dispatch({type: 'CHANGE_MILEAGE' , 
            value: {
                mileage1: e.target.id==='mileage1' ? e.target.value : stateMileage.mileage1,
                mileage2: e.target.id==='mileage2' ? e.target.value : stateMileage.mileage2,
            }
        })                 
    }
    const handlePrice = (e) => {                        
        dispatch({type: 'CHANGE_PRICE' , 
            value: {
                price1: e.target.id==='price1' ? e.target.value : statePrice.price1,
                price2: e.target.id==='price2' ? e.target.value : statePrice.price2,
            }
        })           
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
                fuel: e.target.id==='fuel' ? e.target.value : stateFilter.fuel,
                exterior: e.target.id==='exterior' ? e.target.value : stateFilter.exterior,
                interior: e.target.id==='interior' ? e.target.value : stateFilter.interior,
            }
        });
    }
    if (type==='categories') {
        return(
            <ul className='category'>
                <li><a href='/search' onClick={(e) => handleCategory2('0',e)}><i className="fas fa-car"></i> Cars </a></li>
                <li><a href='/search' onClick={(e) => handleCategory2('1',e)}><i className="fas fa-motorcycle"></i> Motor</a></li>
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
                    <select id="category" name="category" className="form-control" defaultValue={stateCategory} onChange={({ target: {value} }) => handleCategory(value)}>
                        <option value=''>All CATEGORY</option>
                        {category.map((data, idx) => 
                            <option value={idx} key={idx}>
                            {data}
                            </option>                            
                        )} 
                    </select>
                </li>
                <li>
                    <div className="form-check form-check-inline">                                                            
                        <input className="form-check-input" type="radio" name="condition" id="used" defaultChecked={stateFilter.condition} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="used">Used Item</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="condition" id="new"  defaultChecked={stateFilter.condition} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="new">New Item</label>
                    </div>
                </li>
                <li>
                    <label htmlFor="model">MODEL</label>
                    <select id="model" name='model' defaultValue={stateFilter.model} className="form-control" onChange={(e)=> handleChange(e)}>
                        <Model category={stateCategory} />
                    </select>
                </li>
                <li>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="photo" value='true' defaultChecked={stateFilter.photo} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="photo">With photos</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="video" value='true' defaultChecked={stateFilter.photo} onChange={(e)=> handleChange(e)}/>
                        <label className="form-check-label" htmlFor="video">With Video</label>
                    </div>
                </li>
                <hr/>
                <li>
                    <label htmlFor="location">LOCATION</label>
                    <select id="location" name='location' defaultValue={stateFilter.location} className="form-control" onChange={(e)=> handleChange(e)}>
                        <option value=''>All</option>
                        {filterData.location.map((data, idx)=> 
                            <option value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="brand">BRAND</label>
                    <select id="brand" name='brand' defaultValue={stateFilter.brand} className="form-control" onChange={(e)=> handleChange(e)}>
                        <Brand category={stateCategory} />
                    </select>
                </li>                
                <li>
                    <label>PRICE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="price1" name='price1' defaultValue={statePrice.price1} className="form-control" onChange={(e)=> handlePrice(e)}>
                                <option value=''>All</option>
                                {filterData.price.map((data, idx)=> 
                                    <option value={data} key={idx}>
                                    {data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                                    </option> 
                                )}
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="price2" name='price2' defaultValue={statePrice.price2} className="form-control" onChange={(e)=> handlePrice(e)}>
                                <option value=''>All</option>
                                {filterData.price.map((data, idx)=> 
                                    <option value={data} key={idx}>
                                    {data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                                    </option> 
                                )}
                            </select>
                        </div>
                    </div>
                </li>
                <hr />
                <li>
                    <label htmlFor="transmision">TRANSMISION</label>
                    <select id="transmision" name="transmision" defaultValue={stateFilter.transmision} className="form-control" onChange={(e)=> handleChange(e)}>
                        <option value=''>All</option>
                        {filterData.transmision.map((data, idx)=> 
                            <option value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="fuel">FUEL</label>
                    <select id="fuel" name="fuel" defaultValue={stateFilter.fuel} className="form-control" onChange={(e)=> handleChange(e)}>
                        <option value=''>All</option>
                        {filterData.fuel.map((data, idx)=> 
                            <option value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>                
                <li>
                    <label>MILEAGE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="mileage1" name='mileage1' defaultValue={stateMileage.mileage1} className="form-control" onChange={(e)=> handleMileage(e)}>
                                <option value=''>All</option>
                                {filterData.mileage.map((data, idx)=> 
                                    <option value={data} key={idx}>
                                    {data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                                    </option> 
                                )}
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="mileage2" name='mileage2' defaultValue={stateMileage.mileage2} className="form-control" onChange={(e)=> handleMileage(e)}>
                                <option value=''>All</option>
                                {filterData.mileage.map((data, idx)=> 
                                    <option value={data} key={idx}>
                                    {data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                                    </option> 
                                )}
                            </select>
                        </div>
                    </div>
                </li>
                <li>
                    <label htmlFor="exterior">EXTERIOR COLOR</label>
                    <select id="exterior" name="exterior" defaultValue={stateFilter.exterior} className="form-control" onChange={(e)=> handleChange(e)}>
                        <option value=''>All</option>
                        {filterData.exterior.map((data, idx)=> 
                            <option value={data} key={idx}>
                            {data}
                            </option> 
                        )}
                    </select>
                </li>
                <li>
                    <label htmlFor="interior">INTERIOR COLOR</label>
                    <select id="interior" name="interior" defaultValue={stateFilter.interior} className="form-control" onChange={(e)=> handleChange(e)}>
                        <option value=''>All</option>
                        {filterData.interior.map((data, idx)=> 
                            <option  value={data} key={idx}>
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
