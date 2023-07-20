import React from 'react';
import CheckerForm from './components/checkerForm';
import { FilterProvider } from './FilterContext';

function App() {
	return (
		<div className="p-4">
			<FilterProvider>
				<CheckerForm />
			</FilterProvider>
		</div>
	);
}

export default App;
