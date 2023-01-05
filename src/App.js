import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Logo from './images/daemon_logo.png'
import Home from './Pages/Home/Home';
import GameHomepage from './Pages/Games/GameHomepage';
import ForumHomepage from './Pages/Forum/ForumHomepage';
import UserProfile from './Pages/UserProfile/UserProfile';
import About from './Pages/About/About';
import GameDetail from './Pages/Games/GameDetailsPage';
import GenrePage from './Pages/Genre/GenrePage';
import PlatformPage from './Pages/PlatformPage/PlatformPage';
import GameAdditionDetail from './Components/Game/GameAdditionDetail';
import DeveloperDetails from './Components/Developer/DeveloperDetails';
import PlayingList from './Pages/UserProfile/PlayingList';
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import { AuthProvider } from "./AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

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
<QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthProvider>
            <NextUIProvider>
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="gameHomepage" element={<GameHomepage />} />
                  <Route path="forumHomepage" element={<ForumHomepage />} />
                  <Route path="about" element={<About />} />
                  <Route path="/games/:id" element={<GameDetail />} />
                  <Route path="/genres/:name" element={<GenrePage />} />
                  <Route path="/platforms/:id" element={<PlatformPage />} />
                  <Route path="/profile/:id" element={<UserProfile />} />
                  <Route path="/playing/:id" element={<PlayingList />} />
                  <Route path="/gameAdditions/:id" element={<GameAdditionDetail />} />
                  <Route path="/developers/:id" element={<DeveloperDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/reset" element={<Reset />} />
              </Routes>
              </NextUIProvider>
            </AuthProvider>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
      )}
    </div>
  );
}

export default App;
