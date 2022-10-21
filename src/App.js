import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Logo from './images/daemon_logo.png'
import Home from './Pages/Home/Home';
import GameHomepage from './Pages/Games/GameHomepage';
import ForumHomepage from './Pages/Forum/ForumHomepage';
import About from './Pages/About/About';
import Layout from './Pages/Layout';
import GameDetail from './Components/Game/GameDetail';
import GameAdditionDetail from './Components/Game/GameAdditionDetail';
import PlatformDetails from './Components/Platform/PlatformDetails';
import GenreDetails from './Components/Genre/GenreDetails';
import DeveloperDetails from './Components/Developer/DeveloperDetails';
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import { AuthProvider } from "./AuthProvider";

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
            <img src={Logo} alt="loader logo" />
          </div>
        </div>
      ) : (

          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="gameHomepage" element={<GameHomepage />} />
                  <Route path="forumHomepage" element={<ForumHomepage />} />
                  <Route path="about" element={<About />} />
                  <Route path="/games/:id" element={<GameDetail />} />
                  <Route path="/gameAdditions/:id" element={<GameAdditionDetail />} />
                  <Route path="/platforms/:id" element={<PlatformDetails />} />
                  <Route path="/genres/:id" element={<GenreDetails />} />
                  <Route path="/developers/:id" element={<DeveloperDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/reset" element={<Reset />} />
                </Route>
              </Routes>
            </AuthProvider>
          </BrowserRouter>
      )}
    </div>
  );
}

export default App;
