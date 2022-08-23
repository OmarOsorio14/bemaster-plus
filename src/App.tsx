import React from 'react';
import {Route,Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import ContentCategory from './pages/ContentCategory';
import './App.css';
function App() {
  return (
    <div className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/genre/:id" element={<ContentCategory/>} />
			</Routes>
    </div>
  );
}

export default App;
