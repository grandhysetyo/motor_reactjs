import React from 'react'

function TabSearch() {
    return (
        <div className='tab-search'>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-search-tab" data-toggle="tab" href="#nav-search" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-search"></i> SEARCH</a>
                    <a class="nav-link" id="nav-listing-tab" data-toggle="tab" href="#nav-listing" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fas fa-plus"></i> ADD LISTING</a>                    
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-search" role="tabpanel" aria-labelledby="nav-search-tab">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="type">TYPE</label>
                                <select id="type" className="form-control">
                                    <option selected>Choose Type</option>
                                    <option>Cars</option>
                                    <option>Motor</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="category">CATEGORY</label>
                                <select id="category" className="form-control">
                                    <option selected>Choose Type</option>
                                    <option>Sedan</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <div class="form-check form-check-inline">                                                            
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Used Item</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">New Item</label>
                                </div>                                                        
                            </div>
                            <div className="form-group col-md-6">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">With photos</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">With Video</label>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="loc">LOCATION</label>
                                <select id="loc" className="form-control">
                                    <option selected>Choose Location</option>
                                    <option>Cars</option>
                                    <option>Motor</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="brand">BRAND</label>
                                <select id="brand" className="form-control">
                                    <option selected>Choose Brand</option>
                                    <option>Cars</option>
                                    <option>Motor</option>
                                </select>
                            </div>                            
                            <div className="form-group col-md-4">
                                <label htmlFor="model">MODEL</label>
                                <select id="model" className="form-control">
                                    <option selected>Choose Type</option>
                                    <option>Sedan</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
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
                <div class="tab-pane fade" id="nav-listing" role="tabpanel" aria-labelledby="nav-listing-tab">...</div>                
            </div>
        </div>
    )
}

export default TabSearch
