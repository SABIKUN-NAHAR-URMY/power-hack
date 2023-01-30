import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({billingPerPage, totalBilling, paginate}) => {
    const pageNumbers = [];
    for(let i=1; i <= Math.ceil(totalBilling / billingPerPage); i++){
        pageNumbers.push(i);
        console.log(pageNumbers);
    }
    return (
        <nav>
            <ul className='flex justify-center items-center'>
                {
                    pageNumbers.map(number => (
                        <li key={number} className='border-2 mr-4 p-5'>
                            <Link to='/billing-list' onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;