import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {email} from '../assets/credentials'
import { useNavigate } from "react-router-dom";
export default function Login() {

	let navigate = useNavigate();

	const [emailUser, setEmailUser] = useState('')	
	const handleSubmit = (event : React.FormEvent<HTMLFormElement> ) =>{
		event.preventDefault()
		if(emailUser === email){
			console.log("correcto")	
			navigate("/", { replace: true });
		}else{
			console.log("incorrecto")	
		}
		}
	const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
		setEmailUser(event.target.value)
	}
	return (
		<div className='flex items-center flex-col w-screen h-screen'>
			<img src={logo} alt="" className='w-40 mt-10' />
			<p className='text-white font-bold text-xl my-4 '>Log in with your email</p>
			<form className="p-4 w-6/12 bg-slate-50 text-left rounded-lg" onSubmit={handleSubmit}>
			
				<div className="relative z-0 w-full mb-6 group">
					<input onChange={handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
					<label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
				</div>
				<button type="submit" className="mt-3 text-lg font-semibold bg-gray-800 mx-auto text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
        Continue
      </button>
			</form> 
		</div>
		
	)
}