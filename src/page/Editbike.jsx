import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { editBike } from "../features/bikemanage/bikeSlice";


const Editbike = () => {
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        type: "",
        price: "",
    });


    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams()



    const bikeedite = useSelector((state) => {
        return state.bikemanage.list
    })

    useEffect(() => {
        const existingBike = bikeedite.find((bike) => bike.id === id);
            setFormData(existingBike);
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("🚴 Bike Edit successfully!");

        setFormData({
            name: "",
            color: "",
            type: "",
            price: "",
        });

        dispatch(editBike(formData))
        navigate("/bikeinfo");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 space-y-8"
            >
                <h2 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-white mb-6">
                    🚴‍♂️ Add a New Bike
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Bike Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="e.g. Yamaha R15"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Color
                        </label>
                        <input
                            type="text"
                            id="color"
                            value={formData.color}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="e.g. Matte Black"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Type
                        </label>
                        <select
                            id="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        >
                            <option value="" disabled>
                                Select type
                            </option>
                            <option value="Bike">Bike</option>
                            <option value="Scooty">Scooty</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            placeholder="e.g. $2500"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                    ➕ Add Bike
                </button>
            </form>
        </div>
    );
};

export default Editbike;
