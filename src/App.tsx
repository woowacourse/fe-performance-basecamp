import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home/Home'));
const Search = lazy(() => import(/* webpackChunkName: "search" */ './pages/Search/Search'));

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';
import { Suspense, lazy } from 'react';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
