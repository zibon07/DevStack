import logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <div className="max-w-300 mx-auto sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className="hover:text-pink-600"><a>Home</a></li>
                            <li className="hover:text-pink-600"><a>Technologies</a></li>
                            <li className="hover:text-pink-600"><a>Projects</a></li>
                            <li className="hover:text-pink-600"><a>About</a></li>
                            <li className="hover:text-pink-600"><a>Contact</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li className="hover:text-pink-600"><a>Home</a></li>
                        <li className="hover:text-pink-600"><a>Technologies</a></li>
                        <li className="hover:text-pink-600"><a>Projects</a></li>
                        <li className="hover:text-pink-600"><a>About</a></li>
                        <li className="hover:text-pink-600"><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className="px-4 py-2 cursor-pointer rounded-md text-sm hover:text-pink-600">
                        Sign In
                    </button>
                    <a className="bg-pink-600 btn text-white text-l font-medium px-6 py-2 rounded-full shadow-md">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;