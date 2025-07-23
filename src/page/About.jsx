const About = () => {
    const features = [
        {
            title: "Inventory Management",
            description:
                "Track your bike inventory in real-time. Monitor stock levels, manage parts, and optimize your supply chain with intelligent analytics and automated reorder points.",
            icon: (
                <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                />
            ),
        },
        {
            title: "Service Tracking",
            description:
                "Comprehensive service history and maintenance scheduling. Keep detailed records of repairs, upgrades, and routine maintenance for every bike in your system.",
            icon: (
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            ),
        },
        {
            title: "Smart Automation",
            description:
                "Automate routine tasks like service reminders, inventory alerts, and customer notifications. Streamline your workflow with intelligent business automation.",
            icon: (
                <>
                    <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </>
            ),
        },
        {
            title: "Financial Analytics",
            description:
                "Comprehensive financial reporting and analytics. Track revenue, expenses, profit margins, and generate detailed reports for better business decisions.",
            icon: (
                <>
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                    />
                </>
            ),
        },
        {
            title: "Customer Experience",
            description:
                "Deliver exceptional customer experiences with integrated CRM, appointment scheduling, and personalized service recommendations for every bike owner.",
            icon: (
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            ),
        },
        {
            title: "Operations Hub",
            description:
                "Centralized operations management with customizable workflows, team collaboration tools, and performance metrics designed for bike shops and service centers.",
            icon: (
                <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                />
            ),
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative py-12 px-6 mx-auto container sm:py-20 lg:px-8 z-10">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                        <span className="text-sm font-medium text-blue-300">🚴‍♂️ About BikeFlow</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-black">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                            Built for Modern
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Bike Businesses
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-slate-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        We empower bike shops, service centers, and enthusiasts with cutting-edge technology that 
                        <span className="text-blue-400 font-medium"> streamlines operations</span>, 
                        <span className="text-purple-400 font-medium"> enhances customer experience</span>, and 
                        <span className="text-cyan-400 font-medium"> drives sustainable growth</span>.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map(({ title, description, icon }, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            
                            {/* Icon Container */}
                            <div className="relative flex justify-center items-center mb-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur group-hover:blur-md transition-all duration-300"></div>
                                <svg 
                                    className="relative w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {icon}
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="mb-4 text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                                    {title}
                                </h3>
                                <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                                    {description}
                                </p>
                            </div>

                            {/* Hover Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/40">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Start Your Journey</span>
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        <button className="group bg-slate-800/50 backdrop-blur-sm border border-slate-600 text-slate-200 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white">
                            <span className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Learn More</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;