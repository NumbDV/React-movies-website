import React from "react";

function Movie(props) {

	const {
		Title: title, 
		Year: year, 
		imdbID: id, 
		Type: type, 
		Poster: poster
	} = props;

	return <div id={id} className="card movie">
				<div className="card-image waves-effect waves-block waves-light">
					{
						poster === 'N/A' ? <img className="activator" src={`https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6`} alt="Not available"/> : <img className="activator" src={poster} alt="poster"/> 						
					}
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">{title}</span>
					<p>{year}<span className="right">{type}</span></p>
				</div>
			</div>
}
export {Movie}