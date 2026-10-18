
import { format } from 'date-fns';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-10'>
            <img className="w-[350px]" src={logo} alt="" />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-[#706F6F]'>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;