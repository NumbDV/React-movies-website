import React, {useState, useEffect} from "react";
import {Preloader} from '../components/Preloader'
import {Movies} from "../components/Movies"
import {Search} from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () =>  {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	// state = {
	// 	movies: [],
	// 	loading: true
	// }
	const searchMovies = (str, type = 'all') => {
		setLoading(true)
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then(response => response.json())
			.then(data => {
				setLoading(false)
				setMovies(data.Search);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false)
			})
	}

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search);
				setLoading(false)
			})
			.catch((err) => {
				console.error(err);
				setLoading(false)
			})
	}, [])

		return <main className="container content">
			<Search searchMovies={searchMovies}/>
			{loading ? (<Preloader/>) : ( (<Movies movies={movies}/>))}
						
		</main>
	
}

export {Main}