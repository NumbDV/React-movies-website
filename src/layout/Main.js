import React from "react";
import {Preloader} from '../components/Preloader'
import {Movies} from "../components/Movies"
import {Search} from "../components/Search"

class Main extends React.Component {
	state = {
		movies: []
	}
	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=fc480d04&s=matrix')
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}
	render() {

		const {movies} = this.state;

		return <main className="container content">
			<Search/>
			{
				movies.length ? (<Movies movies={movies}/>) : <Preloader/>
			}			
		</main>
	}	
}

export {Main}