import React, { useEffect, useState } from 'react';
import useFilter from '../hooks/filter';
import { NumberInput } from '@mantine/core';

const DimensionsForm = () => {
	const labelClass = 'font-bold text-sm mb-4';
	const textField =
		' appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline';

	const { REDUCER_ACTIONS, dimensions, dispatch } = useFilter();

	const { w = 0, h = 0, d = 0 } = dimensions;

	const [width, setWidth] = useState<string | number>(w);
	const [height, setHeight] = useState<string | number>(h);
	const [depth, setDepth] = useState<string | number>(d);

	const onSetDimensions = () => {
		dispatch({
			type: REDUCER_ACTIONS.SET_DIMENSIONS,
			payload: {
				...dimensions,
				dimensions: {
					w: width,
					h: height,
					d: depth,
				},
			},
		});
	};
	useEffect(() => {
		// if (width > 0 && height > 0 && depth > 0) {
		onSetDimensions();
		// }
	}, [width, height, depth]);

	return (
		<>
			<h2 className="text-xl mt-8 font-medium">How big is your bag?</h2>
			<p className="mt-2 mb-4">
				We'll run through every combination of numbers, so don't worry about the
				order of appearance.
			</p>
			<div className="flex gap-4">
				<div>
					<NumberInput
						// label="Width"
						value={width}
						onChange={setWidth}
						hideControls
						suffix=" in"
					/>
				</div>
				<div>
					<NumberInput
						// label="Height"
						value={height}
						onChange={setHeight}
						hideControls
						suffix=" in"
					/>
				</div>
				<div>
					<NumberInput
						// label="Depth"
						value={depth}
						onChange={setDepth}
						hideControls
						suffix=" in"
					/>
				</div>
				{/* <button onClick={onSetDimensions}>Set dimensions</button> */}
			</div>
		</>
	);
};

export default DimensionsForm;
