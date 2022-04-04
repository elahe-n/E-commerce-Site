import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Nav from "./components/Nav";
import { CartProvider } from "./CartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
     <CartProvider>
        <Nav />

        <Routes>
          
          <Route index element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
     </CartProvider>
    </>
  );
}

export default App;
