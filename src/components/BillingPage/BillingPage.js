import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import AllBillingList from '../AllBillingList/AllBillingList';

const BillingPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [allBillingList, setAllBillingList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/billing-list')
        .then(res => res.json())
        .then(data => setAllBillingList(data))
    },[])

    const handelAdd = (data) => {
        console.log(data);
        const bill = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            paidAmount: data.paidAmount,
            dateAndTime: new Date()
        }

        fetch('http://localhost:5000/add-billing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization : `bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(bill)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success(`Bill added successfully`);
                    window.location.reload();
                }
            })
    }

return (
    <div className='mx-20'>
        <div className='border bg-slate-400 flex justify-between items-center p-2'>
            <div className='flex gap-5'>
                <p className='text-2xl font-bold'>Billings</p>
                <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />
            </div>

            <div>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn">Add New Bill</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit(handelAdd)}>
                            {/* Full Name */}
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Full Name</span></label>
                                <input type="text"
                                    {...register("fullName",
                                        { required: "Full Name is required" })} className="input input-bordered w-full" />
                                {errors.fullName && <p className='text-red-600'>{errors.fullName?.message}</p>}
                            </div>
                            {/* Email */}
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email"
                                    {...register("email",
                                        { required: "Email is required" })} className="input input-bordered w-full" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            {/* Phone */}
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Phone</span></label>
                                <input type="text"
                                    {...register("phone",
                                        { required: "Phone is required" })} className="input input-bordered w-full" />
                                {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                            </div>
                            {/* Paid Amount */}
                            <div className="form-control w-full">
                                <label className="label"><span className="label-text">Paid Amount</span></label>
                                <input type="text"
                                    {...register("paidAmount",
                                        { required: "Paid Amount is required" })} className="input input-bordered w-full" />
                                {errors.paidAmount && <p className='text-red-600'>{errors.paidAmount?.message}</p>}
                            </div>
                            <input className='btn w-full mt-5' value='Add New Bill' type="submit" />

                        </form>
                    </div>
                </div>
            </div>
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
                            <th>Date/Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBillingList.map(billingList => <AllBillingList
                            key={billingList._id}
                            billingList={billingList}></AllBillingList>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
};

export default BillingPage;