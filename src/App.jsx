import { Outlet } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Provider from "./context/Provider";

function App() {

  return (
    <Provider>
      <Header/>
      <Outlet/>
      <Cart/>
    </Provider>
  );
}

export default App
