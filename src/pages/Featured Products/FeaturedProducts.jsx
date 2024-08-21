import ProductFaveItem from "./productFaveItem";

const FeaturedProducts = () => {
  return (
    <>
      <section className="w-full flex items-center justify-between my-10">
        {/* Featured Products */}
        <div className="w-2/6 py-1 px-2">
          {/* title top*/}
          <div className="border-b border-gray-300">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-xl">
              Featured Products
            </h1>
            {/* border line */}
            <div className="flex mx-auto mt-3">
              <span className="inline-block w-20 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Product Fave Item */}
          <section className="p-1">
            <ProductFaveItem />
          </section>
        </div>

        {/* Onsale Products */}
        <div className="w-2/6 py-1 px-2">
          {/* title top*/}
          <div className="border-b border-gray-300">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-xl">
              Onsale Products
            </h1>

            {/* border line */}
            <div className="flex mx-auto mt-3">
              <span className="inline-block w-20 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Product Fave Item */}
          <section className="p-1">
            <ProductFaveItem />
          </section>
        </div>

        {/* Top Rated Products */}
        <div className="w-2/6 py-1 px-2">
          {/* title top*/}
          <div className="border-b border-gray-300">
            <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-xl">
              Top Rated Products
            </h1>

            {/* border line */}
            <div className="flex mx-auto mt-3">
              <span className="inline-block w-20 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Product Fave Item */}
          <section className="p-1">
            <ProductFaveItem />
          </section>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
