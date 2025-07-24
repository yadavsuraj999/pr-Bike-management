import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../features/bikemanage/bikeSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));

        if (JSON.parse(localStorage.getItem("isloggedin"))) {
            navigate("/bikeinfo");
        } else {
            toast.error("Invalid Email or Password");
        }
    };

    return (
        <div className="relative h-[100vh] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center overflow-hidden">
            <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />


            <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full max-w-md p-8 bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-800"
            >
                <h2 className="text-white text-3xl font-bold mb-6 text-center">Login</h2>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-300">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
