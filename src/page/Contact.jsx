const Contact = () => {
    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative py-12 px-6 mx-auto container sm:py-20 lg:px-8 z-10">
                <div className="max-w-2xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-blue-500/10">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
                        Contact Us
                    </h2>
                    <p className="mb-8 lg:mb-12 font-light text-center text-slate-400 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                    </p>

                    <form action="#" method="POST" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-200">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="name@company.com"
                                className="block w-full p-2.5 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-200">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Let us know how we can help you"
                                className="block w-full p-3 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-200">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                placeholder="Leave a comment..."
                                className="block w-full p-2.5 text-sm rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl shadow-blue-500/25 hover:scale-105 transition-transform hover:shadow-blue-500/40 focus:ring-4 focus:outline-none focus:ring-blue-500"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
