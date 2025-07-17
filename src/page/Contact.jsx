const Contact = () => {
    return (
        <section className="bg-white dark:bg-gray-950 flex items-center min-h-screen">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>

                <form action="#" method="POST" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="name@company.com"
                            className="block w-full p-2.5 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Let us know how we can help you"
                            className="block w-full p-3 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            placeholder="Leave a comment..."
                            className="block w-full p-2.5 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
