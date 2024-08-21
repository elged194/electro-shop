// import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/Navbar/nav";
import Bestsellers from "./pages/Bestsellers/Bestsellers";
import Branding from "./pages/Branding/Branding";
import FeaturedProducts from "./pages/Featured Products/FeaturedProducts";
import ProductMenu from "./pages/Product menuo/ProductMenu";
import PrductCard from "./pages/productCard/prductCard";
import RecentlyViewed from "./pages/Recently Viewed/RecentlyViewed";
import SpecialOffer from "./pages/special offer/SpecialOffer";

function App() {
  return (
    <>
      <main className="container px-6 mx-auto">
        <Navbar />
        <Header />
        <PrductCard />
        <SpecialOffer />
        <ProductMenu />
        <Bestsellers />
        <RecentlyViewed />
        <Branding />
        <FeaturedProducts />
      </main>

      <footer className="bg-white w-full ">
        <Footer />
      </footer>
    </>
  );
}

export default App;
