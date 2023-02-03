import React from 'react';
import './App.css'; 
import { createRoot } from "react-dom/client";
import Login from './pages/Login/Login';
import Navbar from './pages/Navbar/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
