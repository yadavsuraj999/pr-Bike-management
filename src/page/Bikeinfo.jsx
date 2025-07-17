import { useDispatch, useSelector } from "react-redux";
import { deleteBike } from "../features/bikemanage/bikeSlice";

const BikeInfo = () => {
    const bikes = useSelector((state) => state.bikemanage.list);

    const dispatch = useDispatch()

    
    const handledelete = (id)=>{
        dispatch(deleteBike(id))
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Bike Inventory
                    </h1>

                    <div className="flex w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search bikes..."
                            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        />
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-800"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Bike Name</th>
                                <th className="px-6 py-3">Color</th>
                                <th className="px-6 py-3">Type</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bikes.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center px-6 py-4 text-gray-500 dark:text-gray-400"
                                    >
                                        No Products Found
                                    </td>
                                </tr>
                            ) : (
                                bikes.map((bike, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {bike.name}
                                        </td>
                                        <td className="px-6 py-4">{bike.color}</td>
                                        <td className="px-6 py-4">{bike.type}</td>
                                        <td className="px-6 py-4">{bike.price}</td>
                                        <td className="px-6 py-4 flex gap-4">
                                            <button className="text-blue-600 dark:text-blue-400 hover:underline">
                                                Edit
                                            </button>
                                            <button onClick={()=> handledelete(bike.id)} className="text-red-600 dark:text-red-400 hover:underline">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BikeInfo;
