const Header = () => {
  return (
    <div className="bg-[#121315] relative flex flex-col-reverse lg:pt-0 lg:flex-col lg:pb-0 overflow-hidden h-screen">
      <div className="hidden md:block inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="#121315"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          role="presentation"
        />
      </div>
      <div className="my-auto relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
            Accessible
            <br className="block" />
            <span className="inline-block text-emerald-400"> components</span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-100 md:text-lg">
            Discover a world of accessible components. Elevate your web projects
            with user-friendly and inclusive elements designed for seamless
            integration. Prioritize accessibility without compromising
            innovation.
          </p>
          <div className="flex items-center">
            <a
              href="#main"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-emerald-400 text-white transition duration-200 hover:scale-105 rounded shadow-md"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
