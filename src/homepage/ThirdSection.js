import Layer from "../assets/Layer.svg";
import BoxIcon from "../assets/third-section/box-icon.svg";
import ComputerIcon from "../assets/third-section/computer-icon.svg";
import ConnectIcon from "../assets/third-section/connect-icon.svg";
import EyeIcon from "../assets/third-section/eye-icon.svg";
import IgnitoIcon from "../assets/third-section/ignito-icon.svg";
import LightningIcon from "../assets/third-section/lightning-icon.svg";

function ThirdSection() {
    return (
        <div className="mt-6 p-5 mx-4 text-gray-light lg:max-w-fit lg:flex lg:items-center lg:mx-16 lg:gap-8">
            <div className="lg:w-1/2">
                <h1 className="font-extrabold  text-gray-light text-4xl mx-auto">Take full advantage of everything Layer 2 has to offer.</h1>
                <div className="lg:flex lg:flex-wrap lg:mt-16 flex flex-wrap mt-8 max-w-full">
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full flex items-center gap-2">
                        <img src={EyeIcon} alt="search" />
                        <p>Say goodbye to eye-watering gas fees</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full flex items-center gap-2">
                        <img src={BoxIcon} alt="search" />
                        <p>Get your money in an instant with superfast withdrawals</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={IgnitoIcon} alt="search" />
                        <p>Stay completely secure with optimistic rollups</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={LightningIcon} alt="search" />
                        <p>Execute your trades instantly</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={ComputerIcon} alt="search" />
                        <p>Trade from any device</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={ConnectIcon} alt="search" />
                        <p>Gain leveraged exposure on limitless assets</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={Layer} alt="blockchain" className="my-8 animate-pulse" />
            </div>
        </div>
    );
}

export default ThirdSection;
