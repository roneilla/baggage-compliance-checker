import React from 'react';

const DimensionsForm = () => {
	const labelClass = 'font-bold text-sm mb-4';
	const textField =
		' appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline';
	return (
		<div className="flex gap-4 mt-8">
			<div>
				<label htmlFor="length" className={labelClass}>
					Length
				</label>
				<input className={textField} id="length" type="text" placeholder="0" />
			</div>

			<div>
				<label htmlFor="width" className={labelClass}>
					Width
				</label>
				<input className={textField} id="width" type="text" placeholder="0" />
			</div>
			<div>
				<label htmlFor="height" className={labelClass}>
					Height
				</label>
				<input className={textField} id="height" type="text" placeholder="0" />
			</div>
		</div>
	);
};

export default DimensionsForm;
