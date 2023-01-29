import React from 'react';

const BillingPage = () => {
    return (
        <div className='mx-20'>
            <div className='border bg-slate-400 flex justify-between items-center p-2'>
                <div className='flex gap-5'>
                    <p className='text-2xl font-bold'>Billings</p>
                    <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <button className='btn'>Add New Bill</button>
            </div>

            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>Billing ID</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Paid Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;