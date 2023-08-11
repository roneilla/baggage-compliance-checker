import React, { useContext, useEffect, useState } from 'react';

import { airlineData } from '../data';

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
	const [openDropdown, setOpenDropdown] = useState(false);
	const [allSelected, setAllSelected] = useState(true);

	const [selectedAirlines, setSelectedAirlines] =
		useState<AirlineOptionProps[]>(airlineData);

	const checkbox = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ';

	interface EditProps {
		airlineInd?: string | boolean;
	}

	const editAirlinesArray = ({ airlineInd }: EditProps) => {
		const airlinesArr = [...selectedAirlines];

		const index = airlinesArr.findIndex(
			(element) => element.name === airlineInd
		);

		if (index === -1) {
			const newLine = airlineData.findIndex(
				(element) => element.name === airlineInd
			);

			airlinesArr.splice(newLine, 0, airlineData[newLine]);
		} else {
			airlinesArr.splice(index, 1);
		}

		if (airlinesArr.length === airlineData.length) {
			setAllSelected(true);
		}

		setSelectedAirlines((prev) => [...airlinesArr]);
	};

	const Checkbox = ({ value = true, label, index }: CheckboxProps) => {
		const onChangeHandler = () => {
			setAllSelected(false);
			editAirlinesArray({ airlineInd: label });
		};

		const isChecked = allSelected
			? true
			: selectedAirlines.findIndex((element) => element.name === label) === -1
			? false
			: true;

		return (
			<>
				<input
					id={label}
					type="checkbox"
					checked={isChecked}
					className={checkbox}
					onChange={onChangeHandler}
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
					{allSelected
						? 'All'
						: selectedAirlines.length > 0
						? selectedAirlines.map((li) => li.name)
						: 'Select airline'}
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
								onChange={() => {
									if (!allSelected) {
										setSelectedAirlines(airlineData);
									} else {
										setSelectedAirlines([]);
									}
									setAllSelected(!allSelected);
								}}
							/>
							<label
								htmlFor="allSelected"
								className="ml-2 text-sm text-gray-900 dark:text-gray-300">
								All
							</label>
						</li>

						{airlineData.map((airline, index) => (
							<AirlineOption key={index} name={airline.name} index={index} />
						))}
					</ol>
				</div>
			)}
		</div>
	);
};

export default AirlineDropdown;
