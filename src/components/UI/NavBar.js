import { NavLink } from "react-router-dom";
import Logo from "../svg/Logo";
import { useSelector } from 'react-redux';
import CartButton from "../cart/CartButton";

const NavBar = () => {

    //const value = useSelector(state => state.counter.initialValue);
    //const total = useSelector(state => state.cart.total);

    //console.log(value);
    //console.log(total);

    const items = useSelector(state => state.cart.items);
    //const cant = items.length;

    const btnLink = "block inline-block py-1 text-black hover:text-primary cursor-pointer mr-4";
    const activeLink = "block inline-block py-1 text-primary mr-4";

    return (
        <header className="pt-0">
            <nav className="flex items-center justify-between bg-accent p-6 mb-2">
                <div className="flex items-center mr-5">
                    <Logo></Logo>
                    <span className="font-semibold text-2xl mx-2">ChatBot Bar</span>
                </div>
                <div className="grow flex items-center">
                    <div className="grow">
                        <NavLink to="/"
                            className={({ isActive }) => isActive ? "btn-primary-active" : "btn-primary"}
                        >Home</NavLink>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive ? "btn-primary-active" : "btn-primary"}
                        >About</NavLink>
                    </div>
                    <div>
                        <NavLink to="/login"
                            className={({ isActive }) => isActive ? "btn-primary-active" : "btn-primary"}
                        >Login</NavLink>
                        <NavLink to="/signin" className={({ isActive }) => isActive ? activeLink : btnLink}>Signin</NavLink>
                        <CartButton></CartButton>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;