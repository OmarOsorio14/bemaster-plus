import { useState } from "react";
import logo from '../assets/logo.png'
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/userSlice'
import { useNavigate } from "react-router-dom";
import {Link as LinkRouter} from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
		let navigate = useNavigate();
		const dispatch = useAppDispatch();
		const handleClick = () => {
			dispatch(logout())
			navigate("/", { replace: true });
		}

    return (
        <nav className="w-full bg-gray-900 shadow sticky top-0 z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <LinkRouter to="/">
												<img src={logo} alt="" className='w-20' />
                        </LinkRouter>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <LinkRouter to="/">Home</LinkRouter>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <LinkRouter to="/">Series</LinkRouter>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <LinkRouter to="/">Movies</LinkRouter>
                            </li>
                         
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden inline-block">
													<button onClick={() =>handleClick() } className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800">
  													<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
      												Log Out
  													</span>
													</button>
                				</div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
									<button onClick={() =>handleClick() } className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800">
  									<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
      								Log Out
  									</span>
									</button>
                </div>
            </div>
        </nav>
    );
}