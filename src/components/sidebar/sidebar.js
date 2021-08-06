import React from 'react'
import user from '../../assets/images/user.png'

const Content = (props)=> {
    const type = props.type;
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
                    <button className='btn btn-primary btn-lg'><i class="fas fa-phone-alt"></i> +6281230987127</button>
                </li>
            </ul>
        )
    }else if(type==='search'){
        return(
            <ul>
                <li>
                    <label htmlFor="type">TYPE</label>
                    <select id="type" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Cars</option>
                        <option>Motor</option>
                    </select>
                </li>
                <li>
                    <div class="form-check form-check-inline">                                                            
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">Used Item</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">New Item</label>
                    </div>
                </li>
                <li>
                    <label htmlFor="category">CATEGORY</label>
                    <select id="category" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Sedan</option>
                    </select>
                </li>
                <li>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">With photos</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">With Video</label>
                    </div>
                </li>
                <hr/>
                <li>
                    <label htmlFor="loc">LOCATION</label>
                    <select id="loc" className="form-control">
                        <option selected>Choose Location</option>
                        <option>Cars</option>
                        <option>Motor</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="brand">BRAND</label>
                    <select id="brand" className="form-control">
                        <option selected>Choose Brand</option>
                        <option>Cars</option>
                        <option>Motor</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="model">MODEL</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Sedan</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="price">PRICE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="price" className="form-control">
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="category" className="form-control">
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                    </div>
                </li>
                <hr />
                <li>
                    <label htmlFor="model">TRANSMISION</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="model">FUEL</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="model">DRIVE</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="price">MILEAGE</label>
                    <div className="form-row">
                        <div className='col-md-6'>
                            <select id="price" className="form-control">
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                        <div className='col-md-6'>
                            <select id="category" className="form-control">
                                <option selected>0</option>
                                <option>100</option>
                                <option>200</option>
                            </select>
                        </div>
                    </div>
                </li>
                <li>
                    <label htmlFor="model">EXTERIOR COLOR</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="model">INTERIOR COLOR</label>
                    <select id="model" className="form-control">
                        <option selected>Choose Type</option>
                        <option>Manual</option>
                        <option>Automatic</option>
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
