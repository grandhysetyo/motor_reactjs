import React from 'react'
// import { Link } from 'react-router-dom';

function Pagination(props) {
    const { vehiclePerPage, totalVehicle, paginate, activePage} = props;
    const pageNumber = [];

    for (let i = 1; i<= Math.ceil(totalVehicle / vehiclePerPage); i++){
        pageNumber.push(i);
    }
    return (
        <div className='row'>
            <div className='card-pagination'>
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item prev ml-auto"><a href='/' onClick={(e)=> paginate(e,activePage === 1 ? activePage : activePage-1)} className="page-link">Previous</a></li>
                        <li className='number'>
                            {pageNumber.map(number =>(
                                <li className="page-item"><a href='/' onClick={(e)=> paginate(e,number)} className={activePage===number?'page-link active':'page-link'}>{number}</a></li>
                            ))}                                                                   
                        </li>                                       
                        <li className="page-item next mr-auto"><a href='/' onClick={(e)=> paginate(e,activePage === Math.ceil(totalVehicle / vehiclePerPage) ? activePage : activePage+1)} className="page-link">Next</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Pagination
