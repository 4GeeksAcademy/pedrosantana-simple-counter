import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="d-flex flex-row justify-content-center align-items-center text-light bg-dark">
			<i class="fa-regular fa-clock fa-2xl m-2 text-center"></i>
			<h1 className="text-center mt-1 text-color">{props.seconds.toString().padStart(6, '0')}</h1>
		</div>
	);
};

export default SecondsCounter;
