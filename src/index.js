import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/Router';
import './styles.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);

