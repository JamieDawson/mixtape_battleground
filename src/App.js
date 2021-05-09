import './App.css';
import React, {useState, useEffect} from 'react';
import BandcampPlayer from 'react-bandcamp';
import {useForm} from 'react-hook-form';
//const axios = require('axios');

function App() {
	const [albumId1, setAlbumId] = useState({});

	const {register, handleSubmit} = useForm(); // initialize the hook for the form

	//https://jsonplaceholder.typicode.com/todos/1

	useEffect(() => {
		fetch('/getAllData')
			.then((resp) => resp.json())
			.then((resp) => {
				console.log(resp);
				//console.log(resp[0].album_id_first);
				const updatedValue = resp[0].album_id_first;
				setAlbumId(updatedValue);
				console.log('updatedValue: ' + updatedValue);
			});
	}, []);

	const onSubmit = (data) => {
		//console.log('THIS HERE:' + JSON.stringify(data));
		const findAlbumNameInObject = data[Object.keys(data)[0]];
		//console.log('findAlbumNameInObject: ' + findAlbumNameInObject);
		setAlbumId(findAlbumNameInObject);
		//console.log(albumId1);
	};

	return (
		<div className='App'>
			<div className='app__all_albums'>
				<div className='app__album'>
					<BandcampPlayer album={albumId1} size='large' />
					<form onSubmit={handleSubmit(onSubmit)}>
						<input name='firstAlbumSpot' ref={register} />
						<input type='submit' />
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;

//3221399452  //woman chilling
//3057796265  //cult of mary
