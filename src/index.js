import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './app';
import Youtube from './service/youtube';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
root.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
);
