// import "./App.css";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Navbar from "./components/NavBar/nav";
import Bestsellers from "./pages/Bestsellers/Bestsellers";
import Branding from "./pages/Branding/Branding";
import FeaturedProducts from "./pages/FeaturedProducts/FeaturedProducts";
import PrductCard from "./pages/ProductCard/prductCard";
import ProductMenu from "./pages/ProductMenu/ProductMenu";
import RecentlyView from "./pages/RecentlyView/RecentlyViewed";
import SpecialOffer from "./pages/SpecialOffer/SpecialOffer";

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
        <RecentlyView />
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
