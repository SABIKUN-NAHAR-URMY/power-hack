import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { users, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        users.map(user => {
            if (user?.email === email && user?.password === password) {
                setCurrentUser(user.email);
                return navigate('/');
            }
            return toast.error('Please Registration First!');
        })


    }

    return (
        <div className="w-96 mx-auto">

            <div className="card w-full shadow-2xl bg-base-100">
                <form onSubmit={handelLogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login</h1>

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
                        <input className="btn bg-slate-600" type="submit" value="Login" />
                    </div>

                </form>
                <p className='text-center py-7'>New to Power-Hack? <Link className='text-slate-600' to='/registration'>Registration</Link></p>
            </div>
        </div>
    );
};

export default Login;