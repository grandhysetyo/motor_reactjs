import React from 'react'
import { Link } from 'react-router-dom'
import IconCat from '../iconcat/IconCat';
import Rating from '../rating/rating';

const CardGrid = (props) => {
    const { item } = props;
    return (
        <Link className='card-grid' to={`produk/`+item.slug}>
            <div className='title'>
                <img src={'/assets/images/'+item.urlPhoto} alt='' />
                <h5>{item.title}</h5>
                <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
            </div>                        
            <div className='detail'>                            
                <span><IconCat category={item.category} />{item.brand} - {item.model}</span>
                <span> <i className="fas fa-certificate"></i>{item.condition} </span>
                <span><i className="fas fa-tint"></i>{item.fuel}</span>
                <span><i className="fas fa-tachometer-alt"></i>{item.mileage.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} Miles</span>
                <span><i className="fas fa-palette"></i>{item.exterior}</span>
            </div>
            <div className='price'>
                <h5>Rp. {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</h5>
                <span>
                    <Rating rating={item.rating}/>
                </span>                
            </div>
        </Link>
    )
}
function SearchGrid(props) {
    const { data } = props;
    if(data.length > 1){
        return (    
            <div className='search-grid'>
                <div className='row my-4'>
                    {data.map((item,idx) => 
                    <div className='col-md-4' key={idx}>
                        <CardGrid item={item} />
                    </div>
                    )}                
                </div> 
            </div>       
        )
    }else{
        return(
            <div className='search-grid'>
                <div className='row my-4'>
                    <div className='col-md-12'>
                        <div className='card-grid px-5 py-5 '>
                            <h5>No Data, please change filter combination</h5>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SearchGrid;