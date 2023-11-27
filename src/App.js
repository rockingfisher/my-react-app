import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import History from "./pages/history";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </AnimatePresence>
  );
};
export default App;
