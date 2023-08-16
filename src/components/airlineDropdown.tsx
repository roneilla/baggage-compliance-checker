import React, { useEffect, useState } from 'react';

import { airlineData } from '../data';

import useFilter from '../hooks/filter';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

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
	const { REDUCER_ACTIONS, dispatch } = useFilter();

	const [openDropdown, setOpenDropdown] = useState(false);
	const [allSelected, setAllSelected] = useState(true);

	const data = airlineData.map((item) => item.name);

	const [selAir, setSelAir] = useState<string[]>(data);

	const checkbox = 'w-4 h-4 text-sky-500 rounded ';

	interface EditProps {
		airlineInd?: string | boolean;
	}

	const editAirlinesArray = ({ airlineInd }: EditProps) => {
		const airlinesArr = [...selAir];

		const index = airlinesArr.findIndex((element) => element === airlineInd);

		if (index === -1) {
			const newLine = airlineData.findIndex(
				(element) => element.name === airlineInd
			);

			airlinesArr.splice(newLine, 0, airlineData[newLine].name);
		} else {
			airlinesArr.splice(index, 1);
		}

		if (airlinesArr.length === airlineData.length) {
			setAllSelected(true);
		}

		setSelAir((prev) => [...airlinesArr]);
	};

	const selectOnly = (label: string) => {
		setAllSelected(false);
		setSelAir((prev) => [label]);
	};

	useEffect(() => {
		dispatch({
			type: REDUCER_ACTIONS.SET_AIRLINES,
			payload: {
				selectedAirlines: selAir,
			},
		});
	}, [selAir]);

	const Checkbox = ({ value = true, label, index }: CheckboxProps) => {
		const onChangeHandler = () => {
			setAllSelected(false);
			editAirlinesArray({ airlineInd: label });
		};

		const isChecked = allSelected
			? true
			: selAir.findIndex((element) => element === label) === -1
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
				<button
					className="ml-4 text-sm font-medium text-sky-500"
					onClick={() => selectOnly(label)}>
					Only
				</button>
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
			<div>
				<p className="font-bold text-sm">Select airline(s)</p>
				<div className={`bg-white mt-2 border rounded`}>
					<div
						className="flex justify-between items-center gap-4 py-2 px-3"
						onClick={() => setOpenDropdown(!openDropdown)}>
						{allSelected
							? `All (${selAir.length})`
							: selAir.length > 4
							? `${selAir[0]},   ${selAir[1]}, ${selAir[2]}, ${
									selAir[3]
							  },... +${selAir.length - 4}`
							: selAir.length > 0
							? selAir.map(
									(li, index) =>
										`${li}${index !== selAir.length - 1 ? ', ' : ''}`
							  )
							: 'Select airline'}

						<ChevronDownIcon
							className={`w-4 h-4 text-gray-500 ${
								openDropdown ? 'rotate-180' : ''
							}`}
						/>
					</div>

					{openDropdown && (
						<div className="border-t max-h-48 overflow-y-scroll">
							<ol>
								<li className="p-2 hover:bg-slate-100 cursor-pointer">
									<input
										id="allSelected"
										type="checkbox"
										checked={allSelected}
										className={checkbox}
										onChange={() => {
											if (!allSelected) {
												setSelAir(data);
											} else {
												setSelAir([]);
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
									<AirlineOption
										key={index}
										name={airline.name}
										index={index}
									/>
								))}
							</ol>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AirlineDropdown;
