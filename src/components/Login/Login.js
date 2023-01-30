import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-96 mx-auto">

        <div className="card w-full shadow-2xl bg-base-100">
            <form className="card-body">
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