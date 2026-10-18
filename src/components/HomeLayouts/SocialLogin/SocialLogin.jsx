
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../provider/AuthProvider';
import { useContext } from 'react';


const SocialLogin = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>

            {
                !user &&
                <div className="space-y-3 flex flex-col">
                    <button className="btn btn-outline hover:bg-[#D72050] hover:text-white text-[#D72050]"><FcGoogle size={24} /> Login With Google</button>
                    <button className="btn btn-outline hover:bg-[#403F3F] hover:text-white"><FaGithub size={24} /> Login With Github</button>
                </div>
            }

        </div>
    );
};

export default SocialLogin;