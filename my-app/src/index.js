import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library.jsx';
import Test from './chapter_03/Test.jsx';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import UseStateTest from './chapter_07/UseStateTest';
import UseRefTest from './chapter_07/UseRefTest';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LoginControl from './chapter_09/LoginControl';
import Mailbox from './chapter_09/Mailbox';
import MainPage from './chapter_09/MainPage';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
  root.render(
    <React.StrictMode>
      <LandingPage/>
      <AttendanceBook/>
    </React.StrictMode>,
    document.getElementById('root')
  );
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
