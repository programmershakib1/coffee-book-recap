import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-white bg-opacity-40 py-10 px-14 sticky top-0 z-10 backdrop-blur">
            <div>
                <NavLink to="/" className={({isActive}) => `${isActive?'text-2xl font-bold': 'text-2xl font-bold' }`}>COFFEE BOOK</NavLink>
            </div>
            <div className="flex gap-10 font-semibold">
                <NavLink to="/" className={({isActive}) => `${isActive?'font-bold text-warning': 'text-black' }`}>Home</NavLink>
                <NavLink to="/coffees" className={({isActive}) => `${isActive?'font-bold text-warning': 'text-black' }`}>Coffees</NavLink>
                <NavLink to="/dashboard" className={({isActive}) => `${isActive?'font-bold text-warning': 'text-black' }`}>Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Navbar;