import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";
import Header from "./components/header/header";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
