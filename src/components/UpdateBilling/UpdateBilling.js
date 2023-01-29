import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBilling = () => {
    const [edit, setEdit] = useState([]);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/update-billing/${id}`)
            .then(res => res.json())
            .then(data => setEdit(data))
    }, [id]);

    const handelEdit = data => {
        console.log(data);
        const updateData = {
            fullName : data.fullName,
            email : data.email,
            phone: data.phone,
            paidAmount: data.paidAmount
        }

        fetch(`http://localhost:5000/update-billing/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(data => {
                console.log(data);
                toast.success("Data Updated!");
                navigate('/billing-list');
                window.location.reload();
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-1/2 mx-auto'>
            <form onSubmit={handleSubmit(handelEdit)}>
                {/* Full Name */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Full Name</span></label>
                    <input type="text" defaultValue={edit.fullName}
                        {...register("fullName",
                            { required: "Full Name is required" })} className="input input-bordered w-full" />
                    {errors.fullName && <p className='text-red-600'>{errors.fullName?.message}</p>}
                </div>
                {/* Email */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" defaultValue={edit.email}
                        {...register("email",
                            { required: "Email is required" })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                {/* Phone */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Phone</span></label>
                    <input type="text" defaultValue={edit.phone}
                        {...register("phone",
                            { required: "Phone is required" })} className="input input-bordered w-full" />
                    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                </div>
                {/* Paid Amount */}
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Paid Amount</span></label>
                    <input type="text" defaultValue={edit.paidAmount}
                        {...register("paidAmount",
                            { required: "Paid Amount is required" })} className="input input-bordered w-full" />
                    {errors.paidAmount && <p className='text-red-600'>{errors.paidAmount?.message}</p>}
                </div>
                <input className='btn w-full mt-5' value='Add New Bill' type="submit" />

            </form>
        </div>
    );
};

export default UpdateBilling;