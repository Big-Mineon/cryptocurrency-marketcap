import { Link } from "react-router-dom";

import Button from "../UI/Button";
import MessageIcon from "../assets/Message.svg";

function FourthSection() {
    return (
        <div className="mt-6 p-5 mx-4 text-gray-light lg:max-w-fit lg:flex lg:items-center lg:mx-16 lg:gap-8">
            <div>
                <img src={MessageIcon} alt="blockchain" className="my-8 animate-pulse" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="font-extrabold  text-gray-light text-4xl mx-auto">Do you want to learn more?</h1>
                <div className="lg:flex lg:flex-wrap lg:mt-16 flex-col mt-8 max-w-full">
                    <p>If you are interested what we offer, you might want to check cryptocurrency prices. Why don't you check it now!</p>
                    <Link to="/coins" ><Button title="Get Started" /></Link>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;
