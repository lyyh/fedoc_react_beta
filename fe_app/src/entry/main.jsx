import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './../apps/Nav.jsx';
import Markdown from './../apps/Markdown.jsx';
import '../../app/css/all.css';

ReactDOM.render(
    <div className='docbox'>
    <Nav/>
    <Markdown/>
    </div>,
    document.getElementById('container')
)
