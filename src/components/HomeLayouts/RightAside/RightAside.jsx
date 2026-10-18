import FindUs from "../FindUs/FindUs";
import Qzone from "../QZone/Qzone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightAside = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;