import React from 'react'
import {imgUrl} from '../assets/api'
import {Link as LinkRouter} from "react-router-dom";


export default function Card({movie}: any) {
	return (
		<LinkRouter to={"/detail/"+movie.id} className='shadow-lg shadow-amber-300/60 w-fit m-4'>
			<img src={imgUrl+movie.poster_path} alt="" className="w-80" />
		</LinkRouter>
	)
}
