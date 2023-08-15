import React, { useEffect, useState } from 'react';
import useFilter from '../hooks/filter';

const DimensionsForm = () => {
	const labelClass = 'font-bold text-sm mb-4';
	const textField =
		' appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline';

	const { REDUCER_ACTIONS, dimensions, dispatch } = useFilter();

	const { w = 0, h = 0, d = 0 } = dimensions;

	const [width, setWidth] = useState(w);
	const [height, setHeight] = useState(h);
	const [depth, setDepth] = useState(d);

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
			<div className="my-4">
				We'll run through every combination of numbers, so don't worry about the
				order of appearance.
			</div>
			<div className="flex gap-4">
				<div>
					<label htmlFor="width" className={labelClass}>
						Width
					</label>
					<input
						className={textField}
						id="width"
						type="text"
						placeholder="0"
						// value={width}
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
						// value={height}
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
						// value={depth}
						onChange={(e: any) => setDepth(e.target.value)}
					/>
				</div>
				{/* <button onClick={onSetDimensions}>Set dimensions</button> */}
			</div>
		</>
	);
};

export default DimensionsForm;
