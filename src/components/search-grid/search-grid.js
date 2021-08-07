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
function SearchGrid(props) {
    const { data } = props;
    return (    
        <div className='search-grid'>
            <div className='row my-4'>
                {data.map((item,idx) => 
                <div className='col-md-4' key={idx}>
                    <Link className='card-grid' to={`produk/`+item.slug}>
                        <div className='title'>
                            <img src='https://static.carmudi.co.id/xC44w7y7pIwo2ws9_eqti4xUY6c=/900x405/https://www.trenotomotif.com/ncs/images/TOYOTA/Toyota%2086/ok_%20Toyota%2086.jpg' alt='' />
                            <h5>{item.title}</h5>
                            <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                        </div>                        
                        <div className='detail'>                            
                            <span><IconCat category={item.category} />{item.brand} - {item.model}</span>
                            <span> <i className="fas fa-certificate"></i>{item.condition} </span>
                            <span><i className="fas fa-tint"></i>{item.fuel}</span>
                            <span><i className="fas fa-tachometer-alt"></i>{item.mileage} Miles</span>
                            <span><i className="fas fa-palette"></i>{item.exterior}</span>
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
                    </Link>
                </div>
                )}                
            </div> 
        </div>       
    )
}

export default SearchGrid;