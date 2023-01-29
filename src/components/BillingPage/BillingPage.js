import React from 'react';
import { useForm } from 'react-hook-form';

const BillingPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    // const handelAddProduct = data => {
    //     console.log(data);
    //     const image = data.picture[0];
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgData => {
    //             console.log(imgData.data.url);
    //             if (imgData.success) {
    //                 const product = {
    //                     category_id: parseInt(data.category_id),
    //                     picture: imgData.data.url,
    //                     productName: data.productName,
    //                     location: data.location,
    //                     resalePrice: data.resalePrice,
    //                     originalPrice: data.originalPrice,
    //                     yearsUse: data.yearsUse,
    //                     postedDate: data.postedDate,
    //                     sellerName: data.sellerName,
    //                     status: data.status,
    //                     rating: data.rating,
    //                     mobileNumber: data.mobileNumber,
    //                     description: data.description,
    //                     sell: data.sell,
    //                     email: data.email
    //                 }

    //                 fetch('https://watchbd-server.vercel.app/products', {
    //                     method: 'POST',
    //                     headers: {
    //                         'content-type': 'application/json',
    //                         // authorization : `bearer ${localStorage.getItem('Token')}`
    //                     },
    //                     body: JSON.stringify(product)
    //                 })
    //                     .then(res => res.json())
    //                     .then(result => {
    //                         console.log(result);
    //                         if (result.acknowledged) {
    //                             toast.success(`Product added successfully`);
    //                             navigate(`/products/${data.category_id}`);
    //                         }
    //                     })
    //             }
    //         })
    // }

    const handelAdd = (data) =>{
        console.log(data);
    }

    return (
        <div className='mx-20'>
            <div className='border bg-slate-400 flex justify-between items-center p-2'>
                <div className='flex gap-5'>
                    <p className='text-2xl font-bold'>Billings</p>
                    <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                {/* <button className='btn'>Add New Bill</button> */}

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
                                <td><span className='btn'>Edit</span> | <span className='btn'>Delete</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingPage;