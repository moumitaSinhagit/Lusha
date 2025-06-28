import Navbar from "./Components/Navbar/Navbar"
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import ScrollTop from './Components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./Pages/Checkout/Checkout";
import Wishlist from "./Pages/Wishlist/Wishlist";
import ThankYou from "./Pages/ThankYou/ThankYou";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy/ReturnPolicy";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <ScrollTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/best-sellers" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/return-policy" element={<ReturnPolicy/>} />
          <Route path="/terms-conditions" element={<TermsConditions/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} toastClassName="custom-toast" bodyClassName="custom-toast-body" />
    </div>
  )
}

export default App
