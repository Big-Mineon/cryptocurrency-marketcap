import { NavLink } from "react-router-dom";

function Navbar() {

    const activeClass = ({ isActive }) => (isActive ? "border-b-2" : "");

    return (
        <nav className="flex justify-around my-6 gap-3">
            <div className="flex justify-between items-center space-x-2">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://www.futureswap.com/images/Graphic-Leverage.png" alt="logo" />
                <h2 className="font-bold text-white text-xl md:text-3xl">DataLight</h2>
            </div>
            <ul className="text-gray-light flex gap-3 items-center font-bold md:text-lg md:gap-8">
                <NavLink className={activeClass} to="/home">Home</NavLink>
                <NavLink className={activeClass} to="/coins">Coins</NavLink>
                <NavLink className={activeClass} to="/exchanges">Exchanges</NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;
