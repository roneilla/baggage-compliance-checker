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
					d: 15.5,
					w: 21.5,
					h: 9,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 17,
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
					d: 21.5,
					h: 15.5,
					w: 9,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 16,
					h: 6,
					w: 13,
				},
				weight: false,
			},
		],
	},
	{
		name: 'Philippine Airlines',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					d: 22,
					h: 14,
					w: 9,
				},
				weight: 15,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 18,
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
					d: 22,
					h: 14,
					w: 9,
				},
				weight: 15,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 18,
					h: 8,
					w: 14,
				},
				weight: false,
			},
		],
	},
	{
		name: 'Air Transat',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					d: 9,
					h: 16,
					w: 20,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 5,
					h: 17,
					w: 12,
				},
				weight: false,
			},
		],
	},
	{
		name: 'jetBlue',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					d: 22,
					h: 14,
					w: 9,
				},
				weight: false,
			},
			{
				type: 'personalItem',
				dimensions: {
					d: 17,
					h: 13,
					w: 8,
				},
				weight: false,
			},
		],
	},
	{
		name: 'Delta Airlines',
		limits: [
			{
				type: 'carryOn',
				dimensions: {
					d: 22,
					h: 14,
					w: 9,
				},
				weight: 15,
			},
		],
	},
];
