import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Data from "./components/ProductData";
import Success from "./components/routes/SuccessPage";
import Cancel from "./components/routes/CancelPage";
import AboutUs from "./components/routes/AboutUsPage";
import Faqs from "./components/routes/FaqsPage";
import Contact from "./components/routes/ContactPage";
import TermsAndConditions from "./components/routes/TermAndConditionsPage";
import Footer from "./components/Footer";
import NewArrivalPage from "./components/routes/NewArrivalPage";
import SpecialPage from "./components/routes/SpecialPage";
import ProductDetailPage from "./components/routes/ProductDetailPage";
import ProductPage from "./components/routes/ProductPage";
import CartPage from "./components/routes/CartPage";
import SearchResultPage from "./components/routes/SearchResultPage";
import ProductList from "./components/ProductList";
import { useDispatch } from "react-redux";
import { initializeCart } from "./store";

function App() {
  const [products] = useState(Data);
  const dispatch = useDispatch();

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem("addedToCart"));

    if (existingCartItems && existingCartItems.length > 0) {
      dispatch(initializeCart(existingCartItems));
    } else {
      dispatch(initializeCart([]));
    }
  }, [dispatch]);

  useEffect(() => {
    const existingCartItems = JSON.parse(localStorage.getItem("addedToCart"));

    if (!existingCartItems) {
      localStorage.setItem("addedToCart", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="app">
      <Header products={products} />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/new-arrival"
            element={<NewArrivalPage products={products} />}
          />
          <Route
            path="/special"
            element={<SpecialPage products={products} />}
          />
          <Route path="/cart" element={<CartPage />} />

          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/search-result/:searchQuery"
            element={<SearchResultPage products={products} />}
          />

          <Route
            path="/products/detail/:id"
            element={<ProductDetailPage products={products} />}
          />

          <Route path="*" element={<ProductList products={products} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
