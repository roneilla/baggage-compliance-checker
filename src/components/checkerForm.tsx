import React from 'react';
import AirlineDropdown from './airlineDropdown';
import DimensionsForm from './dimensionsForm';

const CheckerForm = () => {
	return (
		<div className="w-full bg-slate-100 rounded p-4">
			<h1 className="text-3xl font-bold">Luggage Checker</h1>
			<div>Please provide measurements in inches.</div>

			<div>
				<AirlineDropdown />
				<DimensionsForm />
			</div>
		</div>
	);
};

export default CheckerForm;
