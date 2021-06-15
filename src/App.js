import './App.css';
import React, {useState, useEffect} from 'react';
import BandcampPlayer from 'react-bandcamp';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function App() {
	const [albumIdAll, setAlbumId] = useState({});

	const {register, handleSubmit} = useForm(); // initialize the hook for the form

	useEffect(() => {
		fetch('/getAllData')
			.then((resp) => resp.json())
			.then((resp) => {
				const updatedValue1 = {
					album_id_first: resp[0].album_id_first,
					album_id_second: resp[0].album_id_second,
				};
				setAlbumId(updatedValue1);
			});
	}, []);

	const onSubmit = (data) => {
		let findAlbumKey = '';
		let findAlbumValue = '';

		for (const [key, value] of Object.entries(data)) {
			console.log(`LOOP HERE ` + `${key} ${value}`);
			findAlbumKey = key;
			findAlbumValue = value;
		}

		axios
			.post('/update/601b3c29e6fbf6455cef94e5', {
				theKey: findAlbumKey,
				theValue: findAlbumValue,
			})
			.then(function (response) {
				console.log(`axios response is: ` + JSON.stringify(response));
			})
			.catch(function (error) {
				console.log(error);
			});

		let someValues = {
			album_id_first: findAlbumValue,
		};

		setAlbumId(someValues);
		console.log(`findAlbumValue: ` + JSON.stringify(findAlbumValue));
		console.log(`albumIdAll: ` + JSON.stringify(albumIdAll));
	};

	//NOTE TO SELF
	//Have to pass an object to update frontend

	return (
		<div className='App'>
			<div className='app__all_albums'>
				<div className='app__album'>
					<BandcampPlayer album={albumIdAll.album_id_first} size='large' />
					<form onSubmit={handleSubmit(onSubmit)}>
						<input name='album_id_first' ref={register} />
						<input type='submit' />
					</form>
				</div>
				{/* <div className='app__album'>
					<BandcampPlayer album={albumIdAll.album_id_second} size='large' />
					<form onSubmit={handleSubmit(onSubmit)}>
						<input name='album_id_second' ref={register} />
						<input type='submit' />
					</form>
				</div> */}
			</div>
		</div>
	);
}

export default App;

//3221399452  //woman chilling
//3057796265  //cult of mary
