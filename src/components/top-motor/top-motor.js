import React from 'react'
import IconCat from '../iconcat/IconCat';

function TopMotor(props) {    
    const { New, Used } = props;
    const CardBlog = (props)=>{
        const { item } = props
        if(item!==undefined){            
            return(
                <div className='card-blog'>
                    <img src={`/assets/images/${item.urlPhoto}`} alt='' />
                    <div className='blog-content'>
                        <h6>{item.title}</h6>
                        <span><IconCat category={item.category} /> {item.model}</span>
                    <span><i className="far fa-money-bill-alt"></i> Rp. {item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</span>  
                    </div>                                                       
                </div>
            )
        }else{
            return(
                <div className='card-blog'>
                    <p>Loading..</p>
                    <div className='blog-content'>
                        <h6>Loading..</h6>
                        <span><i className="fas fa-calendar-day"></i> Loading..</span>
                    <span><i className="far fa-money-bill-alt"></i> Rp. Loading..</span>
                    </div>
                </div>
            )
        }
        
    } 
    const Blog = ({data}) => {
        if(data.length > 1){
            return(
                <>
                {data.slice(1,6).map((item, idx) => 
                    <div className='col-md-6' key={idx}>
                        <CardBlog item={item}/>
                    </div>
                )}
                </>
            )
        }else{
            return(
                <p>No Data</p>
            )
        }
    }       
    return (
        <div className='top-motor'>                        
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-used-tab" data-toggle="tab" href="#nav-used" role="tab" aria-controls="nav-profile" aria-selected="true">USED</a>                    
                    <a className="nav-link " id="nav-new-tab" data-toggle="tab" href="#nav-new" role="tab" aria-controls="nav-home" aria-selected="false">NEWS</a>                    
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-used" role="tabpanel" aria-labelledby="nav-used-tab">
                    <div className='row'>                        
                        <CardBlog item={Used[0]} />
                    </div>
                    <div className='row'>
                        <Blog data={Used} />                                   
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-new" role="tabpanel" aria-labelledby="nav-new-tab">
                    <div className='row'>                        
                        <CardBlog item={New[0]} />
                    </div>
                    <div className='row'>
                        <Blog data={New} />                                   
                    </div>                    
                </div>                                
            </div>            
        </div>
    )
}

export default TopMotor;
