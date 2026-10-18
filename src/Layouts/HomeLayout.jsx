
import { Outlet, useLoaderData } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayouts/LeftAside/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside/RightAside';

const HomeLayout = () => {
    const data = useLoaderData()
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews data={data} ></LatestNews>
                </section>


                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>


                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;