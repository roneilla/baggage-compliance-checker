import React, { useContext, useEffect, useState } from 'react';

import { airlineData } from '../data';
import useFilter from '../FilterContext';

interface CheckboxProps {
	value?: boolean;
	label: string;
	index: any;
}

interface AirlineOptionProps {
	name: string;
	index?: any;
}

const AirlineDropdown = () => {
	const { addAirlines, selectedAirlines } = useFilter();
	const [openDropdown, setOpenDropdown] = useState(false);
	const [allSelected, setAllSelected] = useState(true);

	const checkbox = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ';

	const Checkbox = ({ value = true, label, index }: CheckboxProps) => {
		const [checked, setChecked] = useState(value);

		useEffect(() => {
			setChecked(allSelected);
		}, [allSelected]);

		return (
			<>
				<input
					id={label}
					type="checkbox"
					checked={checked}
					className={checkbox}
					onClick={() => {
						setChecked(!checked);
						addAirlines(airlineData[index]);
					}}
				/>
				<label
					htmlFor={label}
					className="ml-2 text-sm text-gray-900 dark:text-gray-300">
					{label}
				</label>
				<button className="ml-4 text-sm font-medium text-blue-600">Only</button>
			</>
		);
	};

	const AirlineOption = ({ name, index }: AirlineOptionProps) => {
		return (
			<li className="p-2 hover:bg-slate-100 cursor-pointer">
				<Checkbox label={name} index={index} />
			</li>
		);
	};

	return (
		<div className="mt-4">
			<div>This is {selectedAirlines.length}</div>
			<div>
				<p className="font-bold text-sm">Select airline(s)</p>
				<div
					className="bg-white p-4 rounded mt-2"
					onClick={() => setOpenDropdown(!openDropdown)}>
					All
				</div>
			</div>
			{openDropdown && (
				<div className="bg-white mt-2">
					<ol>
						<li className="p-2 hover:bg-slate-100 cursor-pointer">
							<input
								id="allSelected"
								type="checkbox"
								checked={allSelected}
								className={checkbox}
								onClick={() => setAllSelected(!allSelected)}
							/>
							<label
								htmlFor="allSelected"
								className="ml-2 text-sm text-gray-900 dark:text-gray-300">
								All
							</label>
						</li>

						{airlineData.map((airline, index) => (
							<AirlineOption name={airline.name} index={index} />
						))}
					</ol>
				</div>
			)}
		</div>
	);
};

export default AirlineDropdown;
