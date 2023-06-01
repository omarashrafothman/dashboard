import "./App.css";
import Home from "./pages/home/Home";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Notfound from "./pages/notFound/Notfound";
import Logindriver from "./pages/login/Logindriver.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { userInput } from "./Formsource";
import "./style/dark.scss";
import { useState } from "react";
import Login from "./pages/login/Login";
import Category from "./pages/category/Category";
import Orders from "./pages/orders/Orders";
import Terms from "./pages/TermsandConditions/Terms";
import Product from "./pages/product/Product";

function App() {
  const [dark, setDark] = useState(false);

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home setDark={setDark} dark={dark} />} />
        <Route
          path="logindriver"
          element={<Logindriver setDark={setDark} dark={dark} />}
        />
        <Route
          path="orders"
          element={<Orders setDark={setDark} dark={dark} />}
        />
        <Route
          path="products"
          element={<Product setDark={setDark} dark={dark} />}
        />
        <Route
          path="category"
          element={<Category setDark={setDark} dark={dark} />}
        />
        <Route path="terms" element={<Terms setDark={setDark} dark={dark} />} />
        <Route path="login" element={<Login setDark={setDark} dark={dark} />} />
        <Route path="users">
          <Route index element={<List setDark={setDark} dark={dark} />} />
          <Route
            path=":userId"
            element={<Single setDark={setDark} dark={dark} />}
          />
          <Route
            path="new"
            element={
              <New
                inputs={userInput}
                title="Add New User"
                setDark={setDark}
                dark={dark}
              />
            }
          />
        </Route>

        <Route path="*" element={<Notfound setDark={setDark} dark={dark} />} />
      </Route>
      //
    ),
    { basename: "/" }
  );
  return (
    <div className={dark ? "app dark" : "app"}>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
