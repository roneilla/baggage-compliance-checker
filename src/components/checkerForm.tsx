import React, { useState } from 'react';
import AirlineDropdown from './airlineDropdown';
import DimensionsForm from './dimensionsForm';
import GenerateResults from './generateResults';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const CheckerForm = () => {
	const [generate, setGenerate] = useState(false);
	return (
		<div className="flex-1 bg-gray-100 rounded p-4">
			<h1 className="text-3xl font-bold">Luggage Checker</h1>
			{!generate ? (
				<>
					<div>Please provide measurements in inches.</div>

					<div>
						<AirlineDropdown />
						<DimensionsForm />
					</div>

					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
						onClick={() => setGenerate(true)}>
						Generate
					</button>
				</>
			) : (
				<>
					<button
						className="font-bold rounded my-4 text-blue-500 flex gap-2 items-center"
						onClick={() => setGenerate(false)}>
						<ArrowUturnLeftIcon className="w-4 h-4 text-blue-500" />
						Change criteria
					</button>
					<GenerateResults generate={generate} />
				</>
			)}
		</div>
	);
};

export default CheckerForm;
