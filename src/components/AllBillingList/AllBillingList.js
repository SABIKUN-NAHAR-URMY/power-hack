import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllBillingList = ({ billingList }) => {
    const { _id,fullName, email, phone, paidAmount, dateAndTime } = billingList;
    const navigate = useNavigate();
    
    const handelUpdate = id => {
        navigate(`/update-billing/${id}`);
    }

    return (
        <tr>
            <th></th>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>
            <td>{dateAndTime}</td>
            <td><span onClick={() => handelUpdate(_id)} className='btn'>Edit</span> | <span className='btn'>Delete</span></td>
        </tr>
    );
};

export default AllBillingList;