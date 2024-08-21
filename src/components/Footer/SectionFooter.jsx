const SectionFooter = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="w-full -mx-6 lg:w-2/5">
          <div className="px-6">
            {/* logo */}
            <div className="flex items-center">
              <a href="#" className="text-3xl font-black text-zinc-600">
                electro<span className="text-yellow-400">.</span>
              </a>
            </div>

            {/* support */}
            <div className="flex items-center py-4">
              <i className="bx bx-support text-yellow-400 mr-2 text-5xl"></i>

              <div className="">
                <p className="text-gray-500 text-xs">
                  Got questions? Call us 24/7!{" "}
                </p>
                <h1 className="font-semibold text-gray-800 text-xl">
                  (800)8001-8588,(0600) 874 548
                </h1>
              </div>
            </div>

            <p className="font-bold text-gray-600">Contact info</p>
            <p className="max-w-sm  text-gray-500 dark:text-gray-600">
              Join 31,000+ other and never miss out on new tips, tutorials
            </p>

            {/* icon */}
            <div className="flex mt-6 -mx-2">
              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Reddit"
              >
                <i className="text-2xl bx bxl-facebook"></i>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Facebook"
              >
                <i className="text-2xl bx bxl-twitter"></i>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Github"
              >
                <i
                  className="text-2xl bx bx-wifi"
                  style={{ transform: "rotate(45deg)" }}
                ></i>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Facebook"
              >
                <i className='text-2xl bx bxl-google-plus'></i>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Facebook"
              >
                <i className='text-2xl bx bxl-linkedin'></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 lg:mt-0 lg:flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="text-gray-700 uppercase ">About</h3>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Company
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                community
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Careers
              </a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase ">Blog</h3>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Tec
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Music
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Videos
              </a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase ">Products</h3>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Mega cloud
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Aperion UI
              </a>
              <a
                href="#"
                className="block mt-2 text-sm text-gray-600  hover:underline"
              >
                Meraki UI
              </a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase ">Contact</h3>
              <span className="block mt-2 text-sm text-gray-600  hover:underline">
                +1 526 654 8965
              </span>
              <span className="block mt-2 text-sm text-gray-600  hover:underline">
                example@email.com
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SectionFooter;
