import TokenImage from "../assets/Token.svg";

function SecondSection() {
    return (
        <div className="mt-6 p-5 mx-4 text-gray-light lg:max-w-fit lg:flex lg:items-center lg:mx-16 lg:gap-8">
            <div>
                <img src={TokenImage} alt="blockchain" className="my-8 animate-pulse" />
            </div>
            <div className="lg:w-1/2">
                <h1 className="font-extrabold  text-gray-light text-4xl mx-auto">Built on ETH. <span className="text-green">Owned by you.
                </span></h1>
                <p className="text-gray-light text-xl mt-6 mx-auto text-justify">Unlike Palpatine, we love democracy. That’s why our platform is designed to be governed by you. </p>
                <p className="text-gray-light text-xl mt-6 mx-auto text-justify">Want leveraged exposure on your favorite crypto assets? Get enough people from the Futureswap community to back you and the protocol will automatically add it as an exchange. </p>
                <p className="text-gray-light text-xl mt-6 mx-auto text-justify">Want to passively earn high yields from trade fees and FST rewards? Simply provide stable tokens as liquidity. </p>
            </div>
        </div>
    );
}

export default SecondSection;
