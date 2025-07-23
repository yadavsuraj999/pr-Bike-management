import { useDispatch, useSelector } from "react-redux";
import { deleteBike, searchbike, sortprice } from "../features/bikemanage/bikeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const BikeInfo = () => {

    const [issort, setIssort] = useState(false)

    const bikes = useSelector((state) => state.bikemanage.list);

    const dispatch = useDispatch()
    const naviget = useNavigate()


    const handledelete = (id) => {
        dispatch(deleteBike(id))
    }

    const handleshort = () => {
        setIssort(!issort);
        dispatch(sortprice(!issort))
    }

    const handlesearch = (e) => {
        dispatch(searchbike(e.target.value))
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Bike Inventory
                    </h1>

                    <div className="flex w-full gap-5 sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search bikes..."
                            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-600 dark:text-white" onChange={handlesearch}
                        />
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button onClick={()=> naviget("/addbike")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Bike</button>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Bike Name</th>
                                <th className="px-6 py-3">Color</th>
                                <th className="px-6 py-3">Type</th>
                                <th className="px-6 py-3 cursor-pointer" onClick={handleshort}>Price {!issort ? "⬆️" : "⬇️"} </th>
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
                                            <button onClick={() => naviget(`/editebike/${bike.id}`)} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                Edit
                                            </button>
                                            <button onClick={() => handledelete(bike.id)} className="text-red-600 dark:text-red-400 hover:underline">
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



// setIsshot(!isshort);
// dispatch(sortprice(!isshort))