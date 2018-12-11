import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import Board from './components/Board';

render((
  <BrowserRouter>
    <App>
      <Board name="andy"/>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
