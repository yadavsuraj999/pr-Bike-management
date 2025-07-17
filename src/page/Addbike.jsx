import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BikeForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        color: "",
        type: "",
        price: "",
    });

    const naviget = useNavigate()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Add Bike Successfully")
        naviget("/bikeinfo")
        setFormData({
            name: "",
            color: "",
            type: "",
            price: "",
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                    Add New Bike
                </h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Bike Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                        placeholder="e.g., Yamaha R15"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Color
                    </label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                        placeholder="e.g., Red"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Type
                    </label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                        placeholder="e.g., Sports, Cruiser"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                        placeholder="e.g., $2500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                >
                    Submit Bike
                </button>
            </form>
        </div>
    );
};

export default BikeForm;
