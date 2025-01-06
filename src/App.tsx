import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import LoadingWave from "components/LoadingWave";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { useLoadingState } from "hooks/useLoadingState";
import { shouldUseStatic } from "config";

const pageChangeLoadingProperties = {
  amplitude: 20,
  duration: 100,
};

const apiCallLoadingAmplitude = 20;

function App() {
  const { startLoading, stopLoading, impulseAmplitude } = useLoadingState();

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;

  const location = useLocation();

  useEffect(() => {
    startLoading(
      pageChangeLoadingProperties.amplitude,
      pageChangeLoadingProperties.duration
    );

    return () => stopLoading();
  }, [location, startLoading, stopLoading]);

  useEffect(() => {
    if (isLoading) startLoading(apiCallLoadingAmplitude, null);
    else stopLoading();

    return () => stopLoading();
  }, [isLoading, startLoading, stopLoading]);

  return (
    <div className="App">
      <LoadingWave impulseAmplitude={impulseAmplitude} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {!shouldUseStatic && <Route path="/contact" element={<Contact />} />}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
