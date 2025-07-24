import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLogin } from "../features/bikemanage/bikeSlice";

const Header = () => {
  const { pathname } = useLocation();
  const islogin = useSelector((state) => state.bikemanage.islogin);
  const dispatch = useDispatch();
  const naviget = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(setLogin(false));
    naviget("/login");
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-slate-700/50 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
              <img src="/images/—Pngtree—bike raider_8091096.png" alt="" className="w-6 h-6"/>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BikeFlow
            </span>
            <span className="text-xs text-slate-400 font-medium">Management System</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              pathname === "/" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              pathname === "/about" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              pathname === "/contact" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            Contact
          </Link>
          {islogin && (
            <Link
              to="/bikeinfo"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                pathname === "/bikeinfo" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Bike Info
            </Link>
          )}
        </div>

        <div className="hidden md:flex items-center">
          {islogin ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-4"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Log In
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  pathname === "/" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                🏠 Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  pathname === "/about" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium ${
                  pathname === "/contact" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                📞 Contact
              </Link>
            </li>
            {islogin && (
              <li>
                <Link
                  to="/bikeinfo"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium ${
                    pathname === "/bikeinfo" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  🚴 Bike Info
                </Link>
              </li>
            )}
            <li>
              {islogin ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 rounded-lg font-medium text-white bg-red-700 hover:bg-red-800 transition-all duration-300"
                >
                  🚪 Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                >
                  🔐 Log In
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
