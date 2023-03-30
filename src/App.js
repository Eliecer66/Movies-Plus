import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import './styles/globals.scss';
import apiUrls from './utils/apiUrls';

const rootElement = document.getElementById('root');

const App = () => (
  <div>
    <Navbar />
    <Carousel
      title='Trending Movies'
      category='trending'
      mediaType='movie'
      background='main'
      apiKey={apiUrls.apiKey}
    /> 
    <Carousel
      title='Trending Series'
      category='trending' 
      mediaType='tv'
      background='secondary'
      apiKey={apiUrls.apiKey}
    />
    <Carousel
      title='Popular'
      category='popular'
      background='main'
      apiKey={apiUrls.apiKey}
    /> 
  </div>
);

render(<App />, rootElement);
