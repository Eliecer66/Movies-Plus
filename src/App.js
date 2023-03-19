import React from 'react';
import { render } from 'react-dom';

import './styles/globals.scss';

const rootElement = document.getElementById('root');

const App = () => (
  <div>
    Hello
  </div>
);

render(<App />, rootElement);
