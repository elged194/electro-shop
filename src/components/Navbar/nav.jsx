import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-gray-500 w-full">
      <nav className="relative bg-white  ">
        <div className="">
          {/* top bar */}
          <div className="py-1.5 flex justify-between items-center max-md:flex-nowrap max-lg:flex-col bg-white border-b shadow ">
            <div className=" flex items-center">
              {/* phone */}
              <a href="#" className="flex justify-center items-center">
                <i className="bx bx-phone text-yellow-400 text-base mx-1"></i>
                +060(800)801-858
              </a>
              {/* email */}
              <a href="#" className="flex justify-center items-center mx-1">
                <i className="bx bx-envelope text-yellow-400 text-base mx-1"></i>
                info@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              {/* Location */}
              <a
                href="#"
                className="flex justify-center items-center mx-1 border-r-2 border-gray-300 px-1 "
              >
                <i className="bx bx-map text-gray-500 text-base mx-1"></i>
                Store Location
              </a>

              {/* order */}
              <a
                href="#"
                className="flex justify-center items-center mx-1 border-r-2 border-gray-300 px-1 "
              >
                <i className="bx bxs-shopping-bags text-gray-500 text-base mx-1"></i>
                Track Your Order
              </a>
              {/* select */}
              <form className="px-1.5 flex items-center max-w-sm mx-auto relative border-r-2 border-gray-300">
                <i className="bx bx-dollar text-gray-500 text-base"></i>
                <select className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-none block w-full ">
                  <option value="US">Dollar (US)</option>
                  <option value="CA">Canada (CA)</option>
                  <option value="FR">France (FR)</option>
                  <option value="DE">Germany (DE)</option>
                </select>
              </form>

              {/* Aus */}
              <div className="px-2 ">
                <i className="bx bx-user text-gray-500 text-base mx-1 "></i>
                <a href="#" className="text-black font-medium">
                  Register
                </a>
                <span className="text-zinc-700"> or </span>
                <a href="#" className="text-black font-medium">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* center bar */}
          <div className="flex flex-col md:flex-row justify-between md:items-center py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* logo */}
                <a href="#" className="text-4xl font-black	">
                  electro<span className="text-yellow-400">.</span>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Search input on desktop screen */}
            <div className="mx-10 w-1/2 relative border-2 border-yellow-400 flex items-center justify-between rounded-full overflow-hidden max-h-11 max-lg:hidden">
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border-none focus:outline-none"
                placeholder="Search for products"
              />
              {/* select */}
              <form className="px-0  flex items-center w-2/5 mx-auto">
                <select className="py-2 bg-gray-50 text-gray-500 text-xs focus:outline-none block w-full p-2 ">
                  <option value="all">All Categories</option>
                  <option value="CA">Canada (CA)</option>
                  <option value="FR">France (FR)</option>
                  <option value="DE">Germany (DE)</option>
                </select>
              </form>

              <i className="bx bx-search text-white text-xl py-3 px-4 rounded-r-md bg-yellow-400"></i>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-24 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
            >
              <div className="flex flex-col md:flex-row md:mx-1">
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-400 md:mx-4 md:my-0"
                  href="#"
                >
                  <i className="bx bx-repost text-2xl"></i>
                </a>
                <a
                  className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-yellow-400 md:mx-4 md:my-0"
                  href="#"
                >
                  <i className="bx bxs-heart text-2xl"></i>
                </a>

                <a className="relative cursor-pointer  transition-colors duration-300 transform">
                  <i className="bx bx-shopping-bag text-2xl border-none  "></i>
                  <span className="absolute top-2.5 left-3 w-5 h-5 text-center rounded-full bg-yellow-300 font-semibold ">
                    4
                  </span>
                  <span className="ml-3 text-base font-semibold">
                    $3,205.99
                  </span>
                </a>
              </div>

              {/* Search input on mobile screen */}
              <div className="my-4 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
