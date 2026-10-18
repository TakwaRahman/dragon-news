import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;