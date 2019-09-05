import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PhotosGroup from './PhotosGroup';
import PhotosGallery from './PhotosGallery';
import Welcome from './Welcome';

const App = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Welcome}/>
			<Route path="/groups" component={PhotosGroup}/>
			<Route path="/gallery" component={PhotosGallery}/>
		</BrowserRouter>
	)
};

export default App;
