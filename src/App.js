import './App.css';
import React, {useState} from 'react';
import BandcampPlayer from 'react-bandcamp';
import {useForm} from 'react-hook-form';

function App() {
	//const value = 0;
	const [albumId1, setAlbumId] = useState(0);
	//const [albumId2, setAlbumId] = useState(0);

	const {register, handleSubmit} = useForm(); // initialize the hook for the form

	const onSubmit = (data) => {
		//console.log(data);
		const findAlbumNameInObject = data[Object.keys(data)[0]];
		setAlbumId(findAlbumNameInObject);
		console.log(albumId1);
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

//<button onClick={() => setAlbumId(3221399452)}>THE BUTTON</button> */

// <div className='app__all_albums'>
// 	<div className='app__album'>
// 		<BandcampPlayer album={albumId2} size='large' />
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<input name='firstAlbumSpot' ref={register} /> {/* register an input */}
// 			<input type='submit' />
// 		</form>
// 	</div>
// </div>;
