import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import NavBar from '../components/Navbar'
export default function ContentDetails() {
	const {id} = useParams()
	const [trailer, setTrailer] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [rating, setRating] = useState(3)
	const handleRating = (rate: number) => {
    setRating(rate)
  
  }
	useEffect(() => {
		axios.get(`http://api.themoviedb.org/3/movie/${id}?api_key=e0bb6b1050a046af521d54e5019d03ae&append_to_response=videos`)
		.then(response =>{
			setDescription(response.data.overview)
			response.data.videos.results.forEach((result:any) => {
				if(result.type === 'Trailer'){
					setTrailer(result.key)
				}
			})
		} )
	},[id])
	return (
		<>
			<NavBar />
			<div className='p-10'>
				<iframe className='w-8/12 h-96 inline-block' src={"https://www.youtube.com/embed/"+trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<div className='text-start my-4'>
					<p className='text-white font-bold text-4xl mb-4'>Description</p>
					<p className='text-white'>{description}</p>
				</div>
			</div>
		</>
	)
}
