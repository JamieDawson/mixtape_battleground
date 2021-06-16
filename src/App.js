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
				//console.log(`axios response is: ` + JSON.stringify(response));
			})
			.catch(function (error) {
				console.log(error);
			});

		//3221399452  //woman chilling
		//3057796265  //cult of mary

		setTimeout(() => {
			fetch('/getAllData')
				.then((resp) => resp.json())
				.then((resp) => {
					const updatedValue2 = {
						album_id_first: resp[0].album_id_first,
						album_id_second: resp[0].album_id_second,
					};
					console.log(`resp damnit: ` + JSON.stringify(resp[0]));
					console.log(`after res: ` + JSON.stringify(updatedValue2));

					setAlbumId(updatedValue2);
				});
		}, 500);

		// setInterval(() => {
		// 	fetch('/getAllData')
		// 		.then((resp) => resp.json())
		// 		.then((resp) => {
		// 			const updatedValue2 = {
		// 				album_id_first: resp[0].album_id_first,
		// 				album_id_second: resp[0].album_id_second,
		// 			};
		// 			console.log(`resp damnit: ` + JSON.stringify(resp[0]));
		// 			console.log(`after res: ` + JSON.stringify(updatedValue2));

		// 			setAlbumId(updatedValue2);
		// 		});
		// }, 9900);
	};

	//NOTE TO SELF
	//The form sends EVERYTHING. That's a bug.
	//Once I send only one thing. I need to update obSubmit()
	// might need to make functions asyn/await
	//https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios

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

//WORKS. but will delete!

// setInterval(() => {
// 	fetch('/getAllData')
// 		.then((resp) => resp.json())
// 		.then((resp) => {
// 			const updatedValue2 = {
// 				album_id_first: resp[0].album_id_first,
// 				album_id_second: resp[0].album_id_second,
// 			};
// 			console.log(`resp damnit: ` + JSON.stringify(resp[0]));
// 			console.log(`after res: ` + JSON.stringify(updatedValue2));

// 			setAlbumId(updatedValue2);
// 		});
// }, 5000);
