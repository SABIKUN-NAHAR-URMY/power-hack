import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [allBillingList, setAllBillingList] = useState([]);
    const { currentUser, setCurrentUser} = useContext(AuthContext);
    let sum = 0;

    useEffect(() => {
        fetch('https://power-hack-server-seven.vercel.app/billing-list')
            .then(res => res.json())
            .then(data => setAllBillingList(data))
    }, []);

    const handelLogOut = () =>{
        setCurrentUser(null);
    }

    const allPaidAmount = allBillingList.map(bill => bill.paidAmount);

    allPaidAmount.map(data => sum = sum + parseInt(data));

    const menuItem = <>
        <li className='text-xl'><Link to='/'>Home</Link></li>
        <li className='text-xl'><Link to='/billing-list'>BillingPage</Link></li>
        {
            currentUser ?
                <li className='text-xl'><button onClick={handelLogOut}>Logout</button></li>

                :
                <>
                    <li className='text-xl'><Link to='/login'>Login</Link></li>
                    <li className='text-xl'><Link to='/registration'>Registration</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Power Hack</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menuItem
                    }
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <p className='text-xl font-bold'>Paid Amount: {sum}</p>
            </div>
        </div>
    );
};

export default Header;