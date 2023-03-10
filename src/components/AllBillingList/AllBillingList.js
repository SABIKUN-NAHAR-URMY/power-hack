import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllBillingList = ({ billingList, handelDelete }) => {
    const { _id,fullName, email, phone, paidAmount, dateAndTime } = billingList;
    const navigate = useNavigate();

    const handelUpdate = id => {
        navigate(`/update-billing/${id}`);
    }

    return (
        <tr>
            <td>{
                _id ? _id : 'Generating id...'
                }</td>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>
            <td>{dateAndTime}</td>
            <td><span onClick={() => handelUpdate(_id)} className='btn'>Edit</span> | <span onClick={() => handelDelete(_id)} className='btn'>Delete</span></td>
        </tr>
    );
};

export default AllBillingList;