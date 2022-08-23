import React from 'react'
import { useParams } from 'react-router-dom'

export default function ContentCategory() {
	const {id} = useParams()
	return (
		<div>ContentCategory {id}</div>
	)
}
