import { Link, NavLink } from 'react-router';
import userImg from '../../assets/user.png';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            alert("Log Out SuccesFully")
        })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='flex justify-between items-center mt-5'>
            <div className="">
                {user && user.email}
            </div>

            <div className="nav flex gap-5 text-[#706F6F]">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrer">Carrer</NavLink>
            </div>

            <div className="login-btn flex gap-5">
                <img src={user && userImg} alt="" />
                {user ? <button onClick={handleLogOut} className='btn bg-[#403F3F] text-white px-10'>Log Out</button> : <Link to="/auth/login" className="btn bg-[#403F3F] text-white px-10">Login</Link>}

            </div>
        </div>
    );
};

export default Navbar;