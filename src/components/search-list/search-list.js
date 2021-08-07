import React from 'react'
import { Link } from 'react-router-dom'

const IconCat = (props)=>{
    if (props.category === '0'){
        return(
            <i className="fas fa-car"></i>
        )
    } else{
        return(
            <i className="fas fa-motorcycle"></i>
        )
    }
}

function SearchList(props) {
    const { data } = props;
    
    return (
        <div className='search-list '>
            <div className='row my-4'>
                {data.map((item,idx) => 
                    <div className='col-md-12' key={idx}>                    
                        <Link className='card-list' to={`produk/`+item.slug}>
                            <img src='https://images.bisnis-cdn.com/thumb/posts/2021/04/13/1380321/toyota-rush1.jpg?w=744&h=465' alt='' />
                            <div className='card-content'>
                                <div className='title'>                        
                                    <h5>{item.title}</h5>
                                    <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                                </div>                        
                                <div className='detail'>     
                                    <div>
                                        <span><IconCat category={item.category} /> {item.brand} - {item.model}</span>
                                        <span><i className="fas fa-certificate"></i> {item.condition}</span>
                                        <span><i className="fas fa-cogs"></i>{item.transmision}</span>
                                        <span><i className="fas fa-tachometer-alt"></i> {item.mileage} Miles</span>
                                    </div>  
                                    <div>
                                        <span><i className="fas fa-tint"></i> {item.fuel}</span>
                                        <span><i className="fas fa-palette"></i> {item.exterior}</span>
                                        <span><i className="fas fa-palette"></i> {item.interior}</span>                                        
                                    </div>                          
                                </div>
                                <div className='price'>
                                    <h5>Rp. {item.price}</h5>
                                    <span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </span>
                                </div>
                            </div>                    
                        </Link>
                    </div>
                )}                
            </div>
        </div>
    )
}

export default SearchList;
