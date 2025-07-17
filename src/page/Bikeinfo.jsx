import { useNavigate } from "react-router-dom";

const BikeInfo = () => {

    const naviget = useNavigate()

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Bike Inventory</h1>
                <button onClick={()=>naviget("/addbike")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                    + Add Bike
                </button>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Trek Domane SL6
                            </th>
                            <td className="px-6 py-4">Matte Black</td>
                            <td className="px-6 py-4">Road Bike</td>
                            <td className="px-6 py-4">$3,499</td>
                            <td className="px-6 py-4 flex gap-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BikeInfo;
