import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./component/loginPage";
import Menu from "./pages/menu";
import Categories from "./pages/categories";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Layout from "./component/layout";
import RegisterPage from "./component/registerPage";
import { useState } from "react";
import Profile from "./pages/profile";
import Design from "./Cpanel/design";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#292640] h-full ">
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />

        <Route
          path="/menu"
          element={
            <Layout setSearch={setSearch}>
              <Menu search={search} />
            </Layout>
          }
        >
         
        </Route>

        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        ></Route>

        <Route
          path="/categories"
          element={
            <Layout>
              <Categories />
            </Layout>
          }
        ></Route>

        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        ></Route>
        <Route path="/profile" element={<Layout><Profile/></Layout>}></Route>
        <Route path="/sign-in" element={<LoginPage />}></Route>
        <Route path="/register-in" element={<RegisterPage />}></Route>
        <Route path="/sign-in" element={<LoginPage />}></Route>
        <Route path="/design" element={<Design />}></Route>

      </Routes>
    </div>
  );
};

export default App;
