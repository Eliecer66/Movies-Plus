import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import './styles/globals.scss';
import HomePage from './components/HomePage';
import WatchList from './components/WatchList';
import Media from './components/Media';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';

const rootElement = document.getElementById('root');

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route exact path='/watchlist' element={<WatchList />}></Route>
          <Route exact path={`/media`} element={<Media />}></Route>
        </Routes>
      </div>
    </div>
  </Router>
);

render(<App />, rootElement);
