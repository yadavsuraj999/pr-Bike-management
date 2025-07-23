import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()

    return (
        <div>
            <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-slate-700/50 shadow-2xl sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <a href="https://flowbite.com/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M5 18.08V19h.92l9.06-9.06-.92-.92L5 18.08zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83.92.92 1.83-1.83 1.41 1.41L16.46 8.46l.92.92 2.33-2.34z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    BikeFlow
                                </span>
                                <span className="text-xs text-slate-400 font-medium">Management System</span>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            <ul className="flex items-center space-x-2">
                                <li>
                                    <Link 
                                        to={"/"} 
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                                            pathname === "/" 
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to={"about"} 
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                                            pathname === "/about" 
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to={"contact"} 
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                                            pathname === "/contact" 
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to={"bikeinfo"} 
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                                            pathname === "/bikeinfo" 
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        Bike Info
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Login Button */}
                        <div className="flex items-center space-x-4">
                            <Link 
                                to={"login"} 
                                className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 group"
                            >
                                <span className="relative z-10">Log In</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden mt-4 pt-4 border-t border-slate-700/50">
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <Link 
                                    to={"/"} 
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        pathname === "/" 
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                    }`}
                                >
                                    🏠 Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to={"about"} 
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        pathname === "/about" 
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                    }`}
                                >
                                    ℹ️ About
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to={"contact"} 
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        pathname === "/contact" 
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                    }`}
                                >
                                    📞 Contact
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to={"bikeinfo"} 
                                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                        pathname === "/bikeinfo" 
                                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                                            : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                                    }`}
                                >
                                    🚴 Bike Info
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header