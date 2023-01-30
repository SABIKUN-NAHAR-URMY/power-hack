import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Registration = () => {
    const navigate = useNavigate();
    const { users, setCurrentUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const currentUser = {
            name: name,
            email: email,
            password: password
        }

        fetch('https://power-hack-server-seven.vercel.app/registration', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Registration successfully!');
                    setCurrentUser(users);
                    console.log(users);
                }
                else {
                    toast.error('Already Registration!');
                }
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))

    }

    return (
        <div className="w-96 mx-auto">

            <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handelRegistration} className="card-body">
                    <h1 className="text-5xl font-bold">Registration</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-slate-600" type="submit" value="Registration" />
                    </div>

                </form>
                <p className='text-center py-7'>Already have an account? <Link className='text-slate-600' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Registration;