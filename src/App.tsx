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
		<div className="flex justify-center flex-col max-w-xl mx-auto">
			<div className="p-8">
				<h1 className="text-4xl accentText">Does your bag fit?</h1>
				<p className="mt-2">Find out which airlines can fit your bag.</p>

				<DimensionsForm />

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

			<div className="p-8 rounded bg-white">
				<GenerateResults />
			</div>

			<div className="text-center text-gray-600 py-4 text-sm">
				<p>Created by Roneilla Bumanlag © 2024</p>

				<div className="flex gap-4 justify-center">
					<p>Portfolio</p>
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
}

export default App;
