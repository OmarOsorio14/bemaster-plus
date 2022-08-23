import React from 'react';
import {Route,Routes, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import ContentCategory from './pages/ContentCategory';
import './App.css';
import ContentDetails from './pages/ContentDetails';
function App() {
  return (
    <div className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/genre/:id" element={<ContentCategory/>} />
				<Route path="/detail/:id" element={<ContentDetails/>} />
			</Routes>
    </div>
  );
}

export default App;
