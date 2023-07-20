export const unitPreferences = {
	weight: 'lbs',
	dimension: 'inches',
};

export const airlineData = [
	{
		name: 'Air Canada',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					l: 15.5,
					w: 21.5,
					h: 9,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					l: 17,
					w: 6,
					h: 13,
				},
				weight: false,
			},
		],
	},
	{
		name: 'WestJet',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					l: 21.5,
					h: 15.5,
					w: 9,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					l: 16,
					h: 6,
					w: 13,
				},
				weight: false,
			},
		],
	},
	{
		name: 'Philippines Airlines',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					l: 22,
					h: 14,
					w: 9,
				},
				weight: 15,
			},
			{
				type: 'personalItem',
				dimensions: {
					l: 18,
					h: 8,
					w: 14,
				},
				weight: false,
			},
		],
	},
	{
		name: 'American Airlines',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					l: 22,
					h: 14,
					w: 9,
				},
				weight: 15,
			},
			{
				type: 'personalItem',
				dimensions: {
					l: 18,
					h: 8,
					w: 14,
				},
				weight: false,
			},
		],
	},
];
