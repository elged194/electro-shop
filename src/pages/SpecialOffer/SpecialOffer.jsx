import CountdownTimer from "./CountdownTimer";
import ProductSalesTracker from "./ProductSalesTracker";
import SpecialOffCard from "./SpecialOffCard";

const SpecialOffer = () => {
  return (
    <>
      <div className="flex  items-start justify-between max-lg:items-center  max-lg:flex-col  my-5 h-auto">

        {/* side special offer max-w-sm */}
        <div className="w-4/12 max-lg:w-9/12 max-sm:w-full border-2 border-yellow-400 rounded-2xl p-5 flex items-center flex-col ">
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-semibold text-gray-500">
              <h1>Special</h1>
              <h1>Offer</h1>
            </div>
            <div className="font-semibold">
              <button className="bg-gray-800 px-8 text-white py-1 rounded-lg">
                <span className="block">Save</span>
                <span className="block">$20</span>
              </button>
            </div>
          </div>

          <div className="my-2 ">
            <img
              src="./img/Screenshot 2024-08-30 212537.png"
              className="my-16"
              alt=""
            />

            <div className="  my-3">
              <p className="font-semibold text-blue-600 text-center">
                Game Console Controller <br />
                +USB 3.0 Cable
              </p>
              <h2 className="text-center my-2">
                $99,00 <span className="text-red-600 text-3xl">$79,00</span>
              </h2>
            </div>
          </div>

          <div className="w-full">
            <ProductSalesTracker />

            <CountdownTimer />
          </div>
        </div>

        {/* menuo product */}
        <div className="w-8/12 max-lg:w-full">
          {/* navBar */}
          <nav className="w-full m-auto ">
            <ul className="flex items-center justify-center ">
              <li className="mx-3 text-lg border-b-2 border-yellow-400 cursor-pointer font-bold">
                Featured
              </li>
              <li className="mx-3 text-lg cursor-pointer font-semibold">
                On Sale
              </li>
              <li className="mx-3 text-lg cursor-pointer font-semibold">
                Top Rated
              </li>
            </ul>
          </nav>

          <div className="w-full flex flex-wrap justify-center my-5 p-2">
            <SpecialOffCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
