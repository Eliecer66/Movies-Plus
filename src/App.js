import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Carousel from './components/home_page/Carousel';
import './styles/globals.scss';
import { apiKey } from './utils/apiUrls';

const rootElement = document.getElementById('root');

const App = () => (
  <div>
    <Navbar />
    <Carousel
      title='Trending Movies'
      category='trending'
      mediaType='movie'
      background='main'
      apiKey={apiKey}
    /> 
    <Carousel
      title='Trending Series'
      category='trending' 
      mediaType='tv'
      background='secondary'
      apiKey={apiKey}
    />
    <Carousel
      title='Popular'
      category='popular'
      background='main'
      apiKey={apiKey}
    /> 
  </div>
);

render(<App />, rootElement);
