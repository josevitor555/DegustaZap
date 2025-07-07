// import { useState } from 'react'

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React Query
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Style from app.css
import './App.css'

// Style from tailwindcss
import './input.css'

// Pages
import Login from "./pages/Welcome"
import Home from "./pages/Home";

// Query Client

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Route for home */}
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
