import CenterBar from "./centerBar";

const Navbar = () => {
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

            {/* top lift */}
            <div className="flex items-center max-lg:flex-wrap max-lg:justify-center	">
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
            <CenterBar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
