const Home = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative container grid px-6 py-8 mx-auto lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-12 z-10">
        <div className="place-self-center lg:col-span-7 space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">🚴‍♂️ Professional Bike Management</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight leading-none md:text-5xl xl:text-7xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Smart Bike
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Management
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              System
            </span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl lg:text-2xl font-light text-slate-300 leading-relaxed">
            From inventory tracking to maintenance scheduling, our comprehensive platform helps bike shops and enthusiasts
            <span className="text-blue-400 font-medium"> streamline operations</span> and
            <span className="text-purple-400 font-medium"> maximize efficiency</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/40">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Get Started</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group bg-slate-800/50 backdrop-blur-sm border border-slate-600 text-slate-200 font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white">
              <span className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
              <div className="text-slate-400 text-sm font-medium">Bikes Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
              <div className="text-slate-400 text-sm font-medium">Active Shops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">99%</div>
              <div className="text-slate-400 text-sm font-medium">Uptime</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 lg:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl backdrop-blur-sm border border-slate-700/50 shadow-2xl">
            <img
              src="https://www.pressanahonda.com/wt_prod-24926/images/home-section-img.jpeg"
              alt="Modern bike management system interface showcasing inventory and maintenance features"
              className="w-full h-auto rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <p className="pt-8 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde aliquam est debitis maxime aliquid at corporis aut nisi, ea similique iure reiciendis corrupti temporibus totam aperiam expedita sunt error?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nostrum reprehenderit ab, id omnis deserunt rerum ex iste odio minus sequi nam numquam doloribus accusamus neque reiciendis error dicta ea!
            </p>

            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <div className="text-xs font-medium">✓ Real-time Tracking</div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <div className="text-xs font-medium">📊 Analytics Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;