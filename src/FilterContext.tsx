import { useReducer, createContext, ReactElement, useMemo } from 'react';

export const initState = {
	dimensions: {
		w: 0,
		h: 0,
		d: 0,
	},
	selectedAirlines: [],
};

type FilterStateType = {
	dimensions?: {
		w: number;
		h: number;
		d: number;
	};
	selectedAirlines?: Array<string>;
};

const REDUCER_ACTION_TYPE = {
	SET_DIMENSIONS: 'SET_DIMENSIONS',
	SET_AIRLINES: 'SET_AIRLINES',
};

type ReducerAction = {
	type: string;
	payload?: FilterStateType;
};

const reducer = (
	state: FilterStateType,
	action: ReducerAction
): FilterStateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.SET_DIMENSIONS:
			if (!action.payload) {
				throw new Error();
			}

			const { w, h, d } = action.payload?.dimensions || {};
			return {
				...state,
				dimensions: {
					w: w || 0,
					h: h || 0,
					d: d || 0,
				},
			};

		case REDUCER_ACTION_TYPE.SET_AIRLINES:
			if (!action.payload) {
				throw new Error();
			}

			return {
				...state,
				selectedAirlines: action.payload?.selectedAirlines || [],
			};

		default:
			throw new Error();
	}
};

const useFilterContext = (initState: FilterStateType) => {
	const [state, dispatch] = useReducer(reducer, initState);

	const REDUCER_ACTIONS = useMemo(() => {
		return REDUCER_ACTION_TYPE;
	}, []);

	const { w, h, d } = state.dimensions || {};

	const selectedAirlines = state?.selectedAirlines || [];

	const dimensions = {
		w: w,
		h: h,
		d: d,
	};

	return { dispatch, REDUCER_ACTIONS, dimensions, selectedAirlines };
};

export type useFilterContextType = ReturnType<typeof useFilterContext>;

const initFilterContextState: useFilterContextType = {
	dispatch: () => {},
	REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
	dimensions: { w: 0, h: 0, d: 0 },
	selectedAirlines: [],
};

const FilterContext = createContext<useFilterContextType>(
	initFilterContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const FilterProvider = ({ children }: ChildrenType): ReactElement => {
	return (
		<FilterContext.Provider value={useFilterContext(initState)}>
			{children}
		</FilterContext.Provider>
	);
};

export default FilterContext;
