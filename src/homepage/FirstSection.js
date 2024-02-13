import BlockchainImage from "../assets/first-section/Blockchain.svg";
import SearchIcon from "../assets/first-section/search-icon.svg";
import LockIcon from "../assets/first-section/lock-icon.svg";
import StarIcon from "../assets/first-section/star-icon.svg";
import HubIcon from "../assets/first-section/hub-icon.svg";

function FirstSection() {
    return (
        <div className="mt-16 p-5 mx-4 text-gray-light lg:max-w-fit lg:flex lg:items-center lg:mx-16 lg:gap-8">
            <div className="lg:w-1/2">
                <h1 className="font-extrabold  text-gray-light text-4xl mx-auto">Fully decentralized.</h1>
                <h1 className="text-green font-extrabold text-4xl mx-auto">Completely secure.</h1>
                <p className="text-gray-light text-xl mt-6 mx-auto text-justify">We have all been in this industry too long not to make the security of your funds our absolute top priority.  That’s why, so far, we’ve spent upwards of $450k on audits from Open Zeppelin and Trail of Bits, as well as code reviews from white hats. </p>
                <div className="lg:flex lg:flex-wrap lg:mt-16 flex flex-wrap mt-8 max-w-full">
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full flex items-center gap-2">
                        <img src={SearchIcon} alt="search" />
                        <p>Constant reviews and testing of our platform</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full flex items-center gap-2">
                        <img src={HubIcon} alt="search" />
                        <p>Fully decentralized and non-custodial</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={LockIcon} alt="search" />
                        <p>Your funds are as secure as possible</p>
                    </div>
                    <div className="lg:flex lg:w-1/2 md:w-1/2 w-full mt-6 flex items-center gap-2">
                        <img src={StarIcon} alt="search" />
                        <p>Built by seasoned crypto veterans</p>
                    </div>
                </div>
            </div>
            <div>
                <img src={BlockchainImage} alt="blockchain" className="my-8 animate-pulse" />
            </div>
        </div>
    )
}

export default FirstSection;
