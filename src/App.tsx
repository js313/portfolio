import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LoadingWave from "components/LoadingWave";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

function App() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;

  const [pageChanged, setPageChanged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPageChanged(true);
    setTimeout(() => setPageChanged(false), 100);
  }, [location]);

  return (
    <div className="App">
      <LoadingWave isLoading={isLoading || pageChanged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
