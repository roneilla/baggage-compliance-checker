import React, { useEffect, useState } from 'react';
import useDimensions from '../hooks/dimensions';

const DimensionsForm = () => {
	const labelClass = 'font-bold text-sm mb-4';
	const textField =
		' appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline';

	const { REDUCER_ACTIONS, dimensions, dispatch } = useDimensions();

	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [depth, setDepth] = useState(0);

	const onSetDimensions = () =>
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

	useEffect(() => {
		// if (width > 0 && height > 0 && depth > 0) {
		onSetDimensions();
		// }
	}, [width, height, depth]);

	return (
		<div className="flex gap-4 mt-8">
			<div>
				<label htmlFor="width" className={labelClass}>
					Width
				</label>
				<input
					className={textField}
					id="width"
					type="text"
					placeholder="0"
					onChange={(e: any) => setWidth(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="height" className={labelClass}>
					Height
				</label>
				<input
					className={textField}
					id="height"
					type="text"
					placeholder="0"
					onChange={(e: any) => setHeight(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="depth" className={labelClass}>
					Depth
				</label>
				<input
					className={textField}
					id="depth"
					type="text"
					placeholder="0"
					onChange={(e: any) => setDepth(e.target.value)}
				/>
			</div>

			{/* <button onClick={onSetDimensions}>Set dimensions</button> */}
		</div>
	);
};

export default DimensionsForm;
