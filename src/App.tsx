import React from 'react';
import CheckerForm from './components/checkerForm';
import useFilter from './hooks/filter';

function App() {
	const { dimensions, selectedAirlines } = useFilter();

	const { w, h, d } = dimensions;

	return (
		<div className="bg-gray-50 min-h-screen">
			<div className="mx-auto max-w-screen-sm p-4">
				<h1 className="text-3xl font-extrabold">Luggage Checker</h1>
				<CheckerForm />
			</div>
		</div>
	);
}

export default App;
