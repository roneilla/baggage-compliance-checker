import React, { useEffect, useRef, useState } from 'react';

import useFilter from '../hooks/filter';
import { airlineData } from '../data';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface GenerateProps {
	generate?: boolean;
}

interface FieldProps {
	label: string;
	data: string | number;
}

interface ResultCardProps {
	airline: string;
}

interface CheckProps {
	compW: string | number;
	compH: string | number;
	compD: string | number;
}

const GenerateResults = ({ generate = true }: GenerateProps) => {
	const { dimensions } = useFilter();

	const selectedAirlines = airlineData.map((item) => item.name);

	const [showLimits, setShowLimits] = useState(true);

	const { w = 0, h = 0, d = 0 } = dimensions;

	const num = 4;

	const checkDiffConfig = ({ compW, compH, compD }: CheckProps) => {
		const excluding = (i: any) => (xs: any) =>
			[...xs.slice(0, i), ...xs.slice(i + 1)];

		const permutations = (xs: any) =>
			xs.length === 0
				? [[]]
				: xs.flatMap((x: any, i: any) =>
						permutations(excluding(i)(xs)).map((p: any) => [x, ...p])
				  );

		const combinationArr = permutations([compW, compH, compD]);

		const isCompliant = combinationArr.filter(
			(air: any) => air[0] >= w && air[1] >= h && air[2] >= d
		);

		if (isCompliant.length <= 0) return false;
		return true;
	};

	const ResultCard = ({ airline }: ResultCardProps) => {
		const compAir = airlineData.find((item) => item.name === airline);

		const compW = compAir?.limits[0].dimensions.w || 0;
		const compH = compAir?.limits[0].dimensions.h || 0;
		const compD = compAir?.limits[0].dimensions.d || 0;

		const isCompliant = checkDiffConfig({
			compW: compW,
			compH: compH,
			compD: compD,
		});

		return (
			<div className="mb-2 pb-2 border-b flex gap-2">
				<div>
					{isCompliant ? (
						<CheckCircleIcon className="h-4 w-4 text-green-500" />
					) : (
						<XCircleIcon className="h-4 w-4 text-red-500" />
					)}
				</div>
				<div>
					<p className="font-bold">{airline}</p>
					{showLimits && (
						<p>
							<span>{`${compW}" `}</span>x<span>{` ${compH}" `}</span>x
							<span>{`${compD}"`}</span>
						</p>
					)}
				</div>
			</div>
		);
	};

	if (!generate)
		return (
			<>
				<p>Click the button!</p>
			</>
		);
	return (
		<div>
			<div className="p-4 rounded-sm accentBg mb-8">
				<h2 className="text-xl font-medium">Compliant with {num} airlines</h2>
			</div>

			<div>
				<input
					id="showLimit"
					type="checkbox"
					checked={showLimits}
					className="w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 rounded "
					onChange={() => setShowLimits((prev) => !prev)}
				/>
				<label
					htmlFor="showLimit"
					className="ml-2 text-sm text-gray-900 dark:text-gray-300">
					Show limits
				</label>
			</div>

			<div className="bg-white mt-4 p-4">
				{selectedAirlines.map((item, index) => (
					<ResultCard airline={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default GenerateResults;
