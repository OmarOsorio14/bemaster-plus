import React, {useState, useEffect} from 'react'
import CarouselItem from './CarouselItem';
import {Carousel} from '3d-react-carousel-ts';
import { genres } from '../assets/genres';
export default function CarouselBox() {

	let slides: JSX.Element[] = []
	useEffect  (()=>{
		
		genres.forEach(genre =>{
			slides.push(<CarouselItem genre={genre} />)
		})
	},[])

	return (
		<Carousel slides={slides} autoplay={true} interval={5000}/> 
	)
}
