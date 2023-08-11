import React from 'react';
import CheckerForm from './components/checkerForm';
import useDimensions from './hooks/dimensions';

function App() {
	const { dimensions } = useDimensions();

	const { w, h, d } = dimensions;

	return (
		<div className="p-4">
			<CheckerForm />
			<div className="w-full bg-slate-100 rounded p-4">
				<div>{w}</div>
				<div>{h}</div>
				<div>{d}</div>
			</div>
		</div>
	);
}

export default App;
