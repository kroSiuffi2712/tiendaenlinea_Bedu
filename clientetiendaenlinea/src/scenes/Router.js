
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ProductsPage from '../pages/ProductsPage';

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<LoginPage />}/>
                <Route exact path="/signup" element={<SignUpPage />} />
                <Route exact path="/products" element={<ProductsPage />} />
            </Routes>
         </BrowserRouter>
    )
}
export default Router;
