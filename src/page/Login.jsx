    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { toast } from "react-toastify";

    const Login = () => {
        const [formData, setFormData] = useState({
            email: "",
            password: "",
        });

        const naviget = useNavigate()

        const handleChange = (e) => {
            console.log(e);
            setFormData({ ...formData, [e.target.id]: e.target.value })
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            if(formData.email == "admin@gmail.com" && formData.password == "admin@123"){
                toast.success("Logged in Successfully")
                naviget("/bikeinfo")
            }else{
                toast.error("Please Enter Vaild email or password")
            }
        };

        return (
            <div className="bg-gray-950 min-h-screen flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm bg-gray-900 p-8 rounded-lg shadow-lg"
                >
                    <h2 className="text-white text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            placeholder="name@example.com"
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            required
                            className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    };

    export default Login;
