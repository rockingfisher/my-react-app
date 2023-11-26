import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Skills from './pages/skills';
import Projects from './pages/projects';
import History from './pages/history';

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/history' element={<History />} />
    </Routes>
  );
}
export default App;