import React from "react";
import { Route, Routes as RouterSwitcher } from "react-router-dom";
import { Home } from "../pages";
export const Routes = () => (
    <RouterSwitcher>
        <Route path="/" element={ <Home /> } />
    </RouterSwitcher>
);