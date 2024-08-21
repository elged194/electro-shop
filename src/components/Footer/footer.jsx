import SectionFooter from "./SectionFooter";

const Footer = () => {
  return (
    <>
      {/* hearo footer */}
      <section className="py-3 px-14 w-full flex items-center justify-between bg-yellow-400 max-lg:flex-col">
        <div className="flex items-center max-lg:py-1">
          <i
            className="bx bx-send text-3xl mr-2 text-gray-700"
            style={{ transform: "rotate(-45deg)" }}
          ></i>
          <h2 className=" text-lg">Sing Up to Newsletter</h2>
        </div>

        <div className="text-base max-lg:py-1">
          <p>
            ...and receive{" "}
            <span className="text-zinc-700 font-bold">
              $20 coupon for first shopping
            </span>
          </p>
        </div>

        {/* search */}
        <div className="max-lg:py-1">
          <div className="overflow-hidden rounded-full">
            <input
              type="email"
              className="py-2 px-5 max-lg:w-52 w-72 border-none focus:outline-none bg-white"
              placeholder="Enter your Email address"
            />
            <button className="py-2 px-5 text-white bg-gray-800">
              Sing Up
            </button>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="container p-6 mx-auto">
        <SectionFooter />
      </section>

      {/* rights reserved */}
      <div className="flex justify-between items-center py-2 px-14 bg-gray-200">
        <p className="text-center text-gray-700 ">
          © Brand 2024 - All rights reserved
        </p>

        <div className=" w-4/12 flex justify-end items-center">
          <img
            src="https://via.placeholder.com/30x30?text=35x30"
            className="mx-2"
            alt=""
          />
          <img
            src="https://via.placeholder.com/30x30?text=35x30"
            className="mx-2"
            alt=""
          />
          <img
            src="https://via.placeholder.com/30x30?text=35x30"
            className="mx-2"
            alt=""
          />
          <img
            src="https://via.placeholder.com/30x30?text=35x30"
            className="mx-2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
