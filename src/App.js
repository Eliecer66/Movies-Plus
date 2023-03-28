import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import './styles/globals.scss';
const API_KEY =  require('./utils');
const DATABASE_PATH = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';

const rootElement = document.getElementById('root');

const App = () => (
  <div>
    <Navbar />
    <Carousel
      title='Trending Movies'
      category='trending'
      mediaType='movie'
      background='main'
      apiKey={API_KEY}
    /> 
    <Carousel
      title='Trending Series'
      category='trending' 
      mediaType='tv'
      background='secondary'
      apiKey={API_KEY}
    />
    <Carousel
      title='Popular'
      category='popular'
      background='main'
      apiKey={API_KEY}
    /> 
  </div>
);

render(<App />, rootElement);
