import './App.css';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Search = React.lazy(() => import('./pages/Search/Search'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<>loading</>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
