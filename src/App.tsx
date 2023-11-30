import React, { useState } from 'react';
import useFilter from './hooks/filter';
import AirlineDropdown from './components/airlineDropdown';
import DimensionsForm from './components/dimensionsForm';

import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import GenerateResults from './components/generateResults';

function App() {
	const { dimensions, selectedAirlines } = useFilter();
	const [generate, setGenerate] = useState(false);

	const { w, h, d } = dimensions;

	return (
		<div className="h-screen overflow-hidden flex">
			<div className="h-full flex-1 p-8 flex flex-col">
				<div className="h-full p-8 bg-white rounded">
					<h1 className="text-3xl font-extrabold">Does your bag fit?</h1>
					<p>Find out which airlines can fit your bag!</p>

					<div>
						<DimensionsForm />
					</div>

					{/* <button
						className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded my-4"
						onClick={() => setGenerate(true)}>
						Generate
					</button>

					<button
						className="font-bold rounded my-4 text-sky-500 flex gap-2 items-center"
						onClick={() => setGenerate(false)}>
						<ArrowUturnLeftIcon className="w-4 h-4 text-sky-500" />
						Reset
					</button> */}
				</div>
				<div className="">
					<p>All rights reserved</p>
					<div className="flex gap-4">
						<p>Created by roneilla bumanlag</p>
						<p>Portfolio</p>
						<p>Contact</p>
					</div>
				</div>
			</div>

			<div className="h-screen flex-1 p-8">
				<div className="p-8 rounded h-full bg-white overflow-scroll">
					<GenerateResults />
				</div>
			</div>
		</div>
	);
}

export default App;
