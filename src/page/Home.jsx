const Home = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen flex items-center">
      <div className="container grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
          </p>
        </div>

        <div className="hidden lg:flex lg:col-span-5 lg:mt-0">
          <img
            src="https://www.pressanahonda.com/wt_prod-24926/images/home-section-img.jpeg"
            alt="Mobile phone mockup showcasing Flowbite's payment UI"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
