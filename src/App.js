import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Logo from './images/daemon_logo.png'
import Home from './Pages/Home/Home';
import GameHomepage from './Pages/Games/GameHomepage';
import ForumHomepage from './Pages/Forum/ForumHomepage';
import About from './Pages/About/About';
import Layout from './Pages/Layout';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">

{loading ? (
  <div className="loader-wrapper">
  <div className="loader">
        <img src={Logo} />
</div>
</div>
): (

<header className="App-header">
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gameHomepage" element={<GameHomepage />} />
          <Route path="forumHomepage" element={<ForumHomepage />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>
  </BrowserRouter>
      </header>
      )}
    </div>
  );
}

export default App;
