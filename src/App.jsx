import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./pages/Base";
import NotFound404 from "./pages/NotFound404";
import DevMode from "./pages/dev/dev";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />

        <Route path="*" element={<NotFound404 />} />
        <Route path="/dev" element={<DevMode />} />
      </Routes>
    </BrowserRouter>
  );
}
