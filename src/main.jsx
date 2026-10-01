import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Intro from "./pages/Intro";
import Markets from "./pages/Markets";
import Marketplace from "./pages/Marketplace";
import Property from "./pages/Property";
import Account from "./pages/Account";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Intro/></Layout>}/>
      <Route path="/markets" element={<Layout><Markets/></Layout>}/>
      <Route path="/marketplace" element={<Layout><Marketplace/></Layout>}/>
      <Route path="/property" element={<Layout><Property/></Layout>}/>
      <Route path="/account" element={<Layout><Account/></Layout>}/>
    </Routes>
  </BrowserRouter>
);
