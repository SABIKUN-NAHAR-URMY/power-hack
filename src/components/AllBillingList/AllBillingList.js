import React from 'react';

const AllBillingList = ({ billingList }) => {
    const { fullName, email, phone, paidAmount } = billingList;
    return (
        <tr>
            <th></th>
            <td>{fullName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{paidAmount}</td>
            <td><span className='btn'>Edit</span> | <span className='btn'>Delete</span></td>
        </tr>
    );
};

export default AllBillingList;