const Branding = () => {
  return (
    <>
      <section className="w-full my-8 p-2 border-y border-gray-400 flex items-center justify-between">
        {/* Prev Button */}
        <button className="mx-3">
          <i className="bx bx-chevron-left text-2xl text-gray-400"></i>
        </button>

        {/* Brand items */}
        <section className="w-11/12	 flex items-center justify-between">
        <img src="https://via.placeholder.com/150x50?text=150x50" alt="" />
        <img src="https://via.placeholder.com/150x50?text=150x50" alt="" />
        <img src="https://via.placeholder.com/150x50?text=150x50" alt="" />
        <img src="https://via.placeholder.com/150x50?text=150x50" alt="" />
        <img src="https://via.placeholder.com/150x50?text=150x50" alt="" />
        </section>

        {/* Next Button */}
        <button className="mx-3">
          <i className="bx bx-chevron-right text-2xl text-gray-400"></i>
        </button>
      </section>
    </>
  );
};

export default Branding;
