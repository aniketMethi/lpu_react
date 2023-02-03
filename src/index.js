import React from 'react';
import ReactDOM from 'react-dom/client';
import Func from './Func';
import NameComp from './NameComp';
import CounterControler from './CounterControler';
import DisplayCounter from './DisplayCounter';
import ParentComp from './ParentComp';
import FuncState from './FuncState';
import ControlledComp from './ControlledComp';
const root = ReactDOM.createRoot(document.getElementsByClassName('root')[0]);
const name = "Aryan";
root.render(
  <React.StrictMode>
    {/* <NameComp firstname="Aryan" lastname ="yadav">
        <h1>How are you ??</h1>
        <h1>I am Good!! Thanks for Asking....</h1>
    </NameComp> */}
 {/* <CounterControler></CounterControler> */}
 {/* <DisplayCounter></DisplayCounter> */}
 {/* <ParentComp></ParentComp> */}
 {/* <FuncState></FuncState> */}
 <ControlledComp></ControlledComp>
  </React.StrictMode>
);


