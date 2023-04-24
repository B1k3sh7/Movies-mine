import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import BottomNavBar from "./components/BottomNavBar";
import Search from "./pages/Search/Search";
import Trending from "./pages/Trending/Trending";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <BottomNavBar />
    </BrowserRouter>
  );
}

export default App;
