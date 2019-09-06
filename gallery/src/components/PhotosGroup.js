import React from 'react';

const PhotosGroup = () => {
	return (
		<div className="ui clearing segment">
			<div className="ui right floated segment">
				<div className="ui search">
					<div className="ui icon input">
						<input className="prompt" type="text" placeholder="Common passwords..."/>
						<i className="search icon"/>
					</div>
					<div className="results"/>
				</div>
			</div>
		</div>
	)
};

export default PhotosGroup;
