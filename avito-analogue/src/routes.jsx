import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>  
    );
  };