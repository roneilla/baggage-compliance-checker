import { airlineData } from './data';

interface LimitProps {
	type: string;
	dimensions: {
		l: number;
		w: number;
		h: number;
	};
	weight?: boolean | number;
}

interface AirlineProps {
	name: string;
	limits: Array<LimitProps>;
}

export interface InitialStateProps {
	selectedAirlines?: Array<AirlineProps>;
	measuredIn?: 'inches' | 'cm';
	addAirlines?: any;
}

export const initialState: InitialStateProps = {
	selectedAirlines: airlineData,
	measuredIn: 'inches',
	addAirlines: () => {},
};

export enum FilterActionKind {
	ADD_AIRLINES = 'ADD_AIRLINES',
}
interface FilterAction {
	type: FilterActionKind;
	payload: InitialStateProps;
}

interface ReducerProps {
	state: InitialStateProps;
	action: FilterAction;
}

export const filterReducer = ({ state, action }: ReducerProps) => {
	const { type, payload } = action;

	switch (type) {
		case FilterActionKind.ADD_AIRLINES:
			console.log('ADD_AIRLINES', payload);

			return {
				...state,
				selectedAirlines: payload.selectedAirlines,
			};
		default:
			throw new Error(`No case for type ${type} found in shopReducer.`);
	}
};
