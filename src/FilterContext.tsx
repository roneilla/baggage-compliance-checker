import { createContext, useReducer, useContext } from 'react';
import {
	FilterActionKind,
	filterReducer,
	initialState,
	InitialStateProps,
} from './filterReducer';

interface LimitProps {
	type: string;
	dimensions: {
		w: number;
		h: number;
		d: number;
	};
	weight?: boolean;
}

interface AirlineProps {
	name: string;
	limits: Array<LimitProps>;
}

interface AddProps {
	airline: Array<AirlineProps>;
}

export const FilterContext = createContext<InitialStateProps>(initialState);

export const FilterProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(filterReducer, initialState);

	const addAirlines = ({ airline }: AddProps) => {
		dispatch({
			type: FilterActionKind.ADD_AIRLINES,
			payload: {
				selectedAirlines: airline,
			},
		});
	};

	const value = {
		selectedAirlines: state.selectedAirlines,
		addAirlines,
	};

	return (
		<FilterContext.Provider value={value}>{children}</FilterContext.Provider>
	);
};

const useFilter = () => {
	const context = useContext(FilterContext);

	if (context === undefined) {
		throw new Error('useShop must be used within ShopContext');
	}

	return context;
};

export default useFilter;
