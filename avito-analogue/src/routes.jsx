import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Profile } from "./pages/profile";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Main />} ></Route>
            <Route path="/profile" element={<Profile />} ></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>  
    );
  };