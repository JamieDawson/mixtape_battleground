import './App.css';
import React, {useState} from 'react';
import BandcampPlayer from 'react-bandcamp';

function App() {
	//const value = 0;
	const [albumId, setAlbumId] = useState(0);

	return (
		<div className='App'>
			<div className='app__player'>
				<BandcampPlayer album={albumId} size='large' />
			</div>
		</div>
	);
}

export default App;
