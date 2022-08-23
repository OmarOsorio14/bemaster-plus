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
	//let slides = [
  //  <img  src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="1" />,
  //  <img  src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="2" />  ,
  //  <img  src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="3" />  ,
  //  <img  src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="4" />  ,

  //  <img src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="5" />   ];
	//let slides = [
	//	<CarouselItem />,
	//	<CarouselItem />,
	//	<CarouselItem />,
	//	<CarouselItem />,

	//]
	return (
		<Carousel slides={slides} autoplay={true} interval={5000}/> 
	)
}
