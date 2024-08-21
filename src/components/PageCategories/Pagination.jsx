import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex">
                {pageNumbers.map(number => (
                    <li className="pagination-courses text-gray-900 hover:text-blue-500 group  cursor-pointer" key={number}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;


/* 
import React from "react"
const Pagination = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumbers = []
    
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageNumbers.push(i)
    }
    
    
    
    
    return(
     <div> 
        
        <ul className="flex " >
            {
                pageNumbers.map(number => (
                    <li className="pagination-courses text-gray-900 hover:text-blue-500 group  cursor-pointer" key={number} onClick={()=> paginate(number)}> 
                    <button href="!#" className="page-link" key={number} >
                        <p className="group-hover:scale-125 w-full h-full">{number}</p>
                    </button>
                    </li>
                ))
            }
        </ul>
     </div>   
    )




}

export default Pagination */