import { useDispatch, useSelector } from "react-redux";
import { deleteBike, searchbike, sortprice } from "../features/bikemanage/bikeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const BikeInfo = () => {
    const [issort, setIssort] = useState(false);
    const bikes = useSelector((state) => state.bikemanage.list);
    const dispatch = useDispatch();
    const naviget = useNavigate();

    const handledelete = (id) => {
        dispatch(deleteBike(id));
    };

    const handleshort = () => {
        setIssort(!issort);
        dispatch(sortprice(!issort));
    };

    const handlesearch = (e) => {
        dispatch(searchbike(e.target.value));
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 min-h-screen p-6 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-bold text-white">Bike Inventory</h1>

                    <div className="flex w-full gap-4 sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search bikes..."
                            className="w-full sm:w-48 px-4 py-2 border border-slate-600 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={handlesearch}
                        />
                        <button
                            onClick={() => naviget("/addbike")}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                        >
                            Add Bike
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-800/40 backdrop-blur-sm shadow-2xl shadow-blue-500/10">
                    <table className="w-full text-sm text-left text-slate-300">
                        <thead className="text-xs uppercase bg-slate-800/60 text-slate-400 border-b border-slate-600">
                            <tr>
                                <th className="px-6 py-3">Bike Name</th>
                                <th className="px-6 py-3">Color</th>
                                <th className="px-6 py-3">Type</th>
                                <th
                                    className="px-6 py-3 cursor-pointer hover:text-blue-400"
                                    onClick={handleshort}
                                >
                                    Price {!issort ? "⬆️" : "⬇️"}
                                </th>
                                <th className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bikes.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="text-center px-6 py-4 text-slate-400"
                                    >
                                        No Products Found
                                    </td>
                                </tr>
                            ) : (
                                bikes.map((bike, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-slate-700/60 transition-all"
                                    >
                                        <td className="px-6 py-4 font-medium text-white">
                                            {bike.name}
                                        </td>
                                        <td className="px-6 py-4">{bike.color}</td>
                                        <td className="px-6 py-4">{bike.type}</td>
                                        <td className="px-6 py-4">${bike.price}</td>
                                        <td className="px-6 py-4 flex gap-4">
                                            <button
                                                onClick={() => naviget(`/editebike/${bike.id}`)}
                                                className="text-blue-400 hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handledelete(bike.id)}
                                                className="text-red-400 hover:underline"
                                            >
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
        </section>
    );
};

export default BikeInfo;
