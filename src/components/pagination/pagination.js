import React from 'react'

function Pagination() {
    return (
        <div className='card-pagination'>
            <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className="page-item prev ml-auto"><a href='/' className="page-link">Previous</a></li>
                    <li className='number'>
                        <li className="page-item "><a href='/' className="page-link active">1</a></li>
                        <li className="page-item"><a href='/' className="page-link">2</a></li>                        
                        <li className="page-item"><a href='/' className="page-link">...</a></li>                                            
                        <li className="page-item"><a href='/' className="page-link">2</a></li>
                        <li className="page-item"><a href='/' className="page-link">3</a></li>                                           
                    </li>                                       
                    <li className="page-item next mr-auto"><a href='/' className="page-link">Next</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Pagination
