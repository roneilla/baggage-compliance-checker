import React from 'react';
import CheckerForm from './components/checkerForm';
import useFilter from './hooks/filter';

function App() {
	const { dimensions, selectedAirlines } = useFilter();

	const { w, h, d } = dimensions;

	return (
		<div className="p-4 flex gap-4">
			<CheckerForm />
			<div className="flex-1 bg-gray-100 rounded p-4">
				<div>{w}</div>
				<div>{h}</div>
				<div>{d}</div>

				<div>{selectedAirlines.length}</div>
			</div>
		</div>
	);
}

export default App;
