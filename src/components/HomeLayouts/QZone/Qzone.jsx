
import Swwiming from '../../../assets/swimming.png'
import classRoom from "../../../assets/class.png"
import playground from "../../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-[#F3F3F3] p-3'>
            <h2 className="font-bold mb-5 text-xl">Q-Zone</h2>
            <div className="space-y-5 flex flex-col">
                <img src={Swwiming} alt="" />
                <img src={classRoom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;