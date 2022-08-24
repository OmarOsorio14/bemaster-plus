import React from 'react';
import {Route,Routes, Navigate} from 'react-router-dom'
import{ Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login'
import ContentCategory from './pages/ContentCategory';
import { useAppSelector } from './redux/hooks';
import './App.css';
import ContentDetails from './pages/ContentDetails';
import {email} from './assets/credentials'
function App() {
	const userEmail = useAppSelector(state => state.user.email)

  return (
    <div className="App">
			<Routes>
				{
					email !== userEmail 
					? <>
							<Route path="*" element={ <Navigate to="/login" /> } />
							<Route path="/login" element={<Login/>} />
					</> 
					: <>
							<Route path="/" element={<Home/>} />
							<Route path="/genre/:id" element={<ContentCategory/>} />
							<Route path="/detail/:id" element={<ContentDetails/>} />
							<Route path="*" element={ <Navigate to="/" /> } />
					</>
				}
				
			</Routes>
			<Toaster />
    </div>
  );
}

export default App;
