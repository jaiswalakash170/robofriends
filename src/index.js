import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './card';
import {robots} from './robots.js';
import 'tachyons';

ReactDOM.render(
    <div>
      <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email} />
      <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email} />
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
