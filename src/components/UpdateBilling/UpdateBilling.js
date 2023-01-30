import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBilling = () => {
    const [edit, setEdit] = useState([]);
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/update-billing/${id}`)
            .then(res => res.json())
            .then(data => setEdit(data))
    }, [id]);

    const handelEdit = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const paidAmount = form.paidAmount.value;
        const updateData = {
            fullName: fullName,
            email: email,
            phone: phone,
            paidAmount: paidAmount
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
            <form onSubmit={handelEdit}>
                {/* Full Name */}

                <label className="label"><span className="label-text">Full Name</span></label>
                <input type="text" name='fullName' required defaultValue={edit.fullName} className="input input-bordered w-full" />

                {/* Email */}

                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" name='email' required defaultValue={edit.email} className="input input-bordered w-full" />

                {/* Phone */}

                <label className="label"><span className="label-text">Phone</span></label>
                <input type="text" name='phone' required defaultValue={edit.phone} className="input input-bordered w-full" />

                {/* Paid Amount */}

                <label className="label"><span className="label-text">Paid Amount</span></label>
                <input type="text" name='paidAmount' required defaultValue={edit.paidAmount} className="input input-bordered w-full" />

                <input className='btn w-full mt-5' value='Update Bill' type="submit" />

            </form>
        </div>
    );
};

export default UpdateBilling;