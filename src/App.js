import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Pages/Home/Home';
import GameHomepage from './Pages/Games/GameHomepage';
import ForumHomepage from './Pages/Forum/ForumHomepage';
import UserProfile from './Pages/UserProfile/UserProfile';
import GameDetail from './Pages/Games/GameDetailsPage';
import GenrePage from './Pages/Genre/GenrePage';
import PlatformPage from './Pages/PlatformPage/PlatformPage';
import GameAdditionDetail from './Pages/Games/GameAdditionDetailsPage';
import PlayingList from './Pages/UserProfile/PlayingList';
import PlanList from './Pages/UserProfile/PlanList';
import OnHoldList from './Pages/UserProfile/OnHoldList';
import DroppedList from './Pages/UserProfile/DroppedList';
import CompletedList from './Pages/UserProfile/CompletedList';
import AnnouncementPage from './Pages/Forum/ForumSectionPages/Announcements';
import GuidelinesPage from './Pages/Forum/ForumSectionPages/Guidelines';
import SuggestionsPage from './Pages/Forum/ForumSectionPages/Suggestions';
import SupportPage from './Pages/Forum/ForumSectionPages/Support';
import NewsPage from './Pages/Forum/ForumSectionPages/News';
import GameAnnouncementPage from './Pages/Forum/ForumSectionPages/GameAnnouncements';
import RecommendationsPage from './Pages/Forum/ForumSectionPages/Recommendations';
import CGTSupportPage from './Pages/Forum/ForumSectionPages/CGTSupport';
import IntroductionsPage from './Pages/Forum/ForumSectionPages/Introductions';
import CasualDiscussionPage from './Pages/Forum/ForumSectionPages/CasualDiscussion';
import ForumThread from './Components/Forum/ForumPostThread/ForumThread';
import ForumUserPostList from './Pages/UserProfile/ForumUserPostList';
import UserSearchPage from './Pages/Search/searchUserPage';
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register";
import Reset from "./Components/Reset/Reset";
import AdminPage from './Pages/Admin/admin';
import SearchFilterGamesPage from './Pages/Search/searchFilterGamesPage';
import { AuthProvider } from "./AuthProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <NextUIProvider>
              <Routes>
                <Route index element={<Home />} />
                <Route path="gameHomepage" element={<GameHomepage />} />
                <Route path="forumHomepage" element={<ForumHomepage />} />
                <Route path="forum/announcements" element={<AnnouncementPage />} />
                <Route path="forum/guidelines" element={<GuidelinesPage />} />
                <Route path="forum/suggestions" element={<SuggestionsPage />} />
                <Route path="forum/support" element={<SupportPage />} />
                <Route path="forum/news" element={<NewsPage />} />
                <Route path="forum/gameannouncements" element={<GameAnnouncementPage />} />
                <Route path="forum/recommendations" element={<RecommendationsPage />} />
                <Route path="forum/games-tech-computer-support" element={<CGTSupportPage />} />
                <Route path="forum/introductions" element={<IntroductionsPage />} />
                <Route path="forum/casual-discussion" element={<CasualDiscussionPage />} />
                <Route path="forum/post/:id" element={<ForumThread />} />
                <Route path="games/:id" element={<GameDetail />} />
                <Route path="genres/:name" element={<GenrePage />} />
                <Route path="platforms/:id" element={<PlatformPage />} />
                <Route path="profile/:id" element={<UserProfile />} />
                <Route path="playing/:id" element={<PlayingList />} />
                <Route path="planning/:id" element={<PlanList />} />
                <Route path="on-hold/:id" element={<OnHoldList />} />
                <Route path="dropped/:id" element={<DroppedList />} />
                <Route path="completed/:id" element={<CompletedList />} />
                <Route path="gameAdditions/:id" element={<GameAdditionDetail />} />
                <Route path="user/posts/:id" element={<ForumUserPostList />} />
                <Route path="search/users" element={<UserSearchPage />} />
                <Route path="search/games" element={<SearchFilterGamesPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/reset" element={<Reset />} />
              </Routes>
            </NextUIProvider>
          </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
