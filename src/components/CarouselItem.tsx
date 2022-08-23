import React from 'react'
import {Link as LinkRouter} from "react-router-dom";

interface Props{
	genre: {
		id: number
		name: string
		photo: string
	}
}

export default function CarouselItem({genre}: Props) {
	
	return (
		<div className='relative'>
			<img src={genre.photo} alt="" />
			<div className="md:p-2 p-0 absolute bottom-0 left-0 bg-amber-800/40 w-full max-h-full rounded">
				<p className='text-white font-bold text-2xl'>{genre.name}</p>
				<LinkRouter to={"/genre/"+genre.id} className="mt-3 w-fit text-lg font-semibold bg-gray-800 mx-auto text-white rounded-lg p-2 block shadow-xl hover:text-white hover:bg-black">
       		Discover
      	</LinkRouter>
			</div>
		</div>
	)
}