import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import NavBar from '../components/Navbar'
import Card from '../components/Card';

export default function ContentCategory() {
	const [movies, setMovies] = useState([])

	const {id} = useParams()
	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e0bb6b1050a046af521d54e5019d03ae&with_genres='+id)
		.then(response => setMovies(response.data.results))
	},[id])
	return (
		<>
			<NavBar />
			<div className='flex flex-wrap justify-center'>
				{
					movies?.map((movie,index) => <Card key={index} movie={movie} />)
				}
			</div>
				
		</>
		
	)
}
