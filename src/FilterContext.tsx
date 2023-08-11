import { useReducer, createContext, ReactElement, useMemo } from 'react';

export const initState = {
	dimensions: {
		w: 0,
		h: 0,
		d: 0,
	},
};

type DimensionStateType = {
	dimensions: {
		w: number;
		h: number;
		d: number;
	};
};

const REDUCER_ACTION_TYPE = {
	SET_DIMENSIONS: 'SET_DIMENSIONS',
};

type ReducerAction = {
	type: string;
	payload?: DimensionStateType;
};

const reducer = (
	state: DimensionStateType,
	action: ReducerAction
): DimensionStateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.SET_DIMENSIONS:
			if (!action.payload) {
				throw new Error();
			}

			const { w, h, d } = action.payload.dimensions;

			return {
				...state,
				dimensions: {
					w: w,
					h: h,
					d: d,
				},
			};

		default:
			throw new Error();
	}
};

const useDimensionsContext = (initState: DimensionStateType) => {
	const [state, dispatch] = useReducer(reducer, initState);

	const REDUCER_ACTIONS = useMemo(() => {
		return REDUCER_ACTION_TYPE;
	}, []);

	const { w, h, d } = state.dimensions;

	const dimensions = {
		w: w,
		h: h,
		d: d,
	};

	return { dispatch, REDUCER_ACTIONS, dimensions };
};

export type UseDimensionsContextType = ReturnType<typeof useDimensionsContext>;

const initDimensionsContextState: UseDimensionsContextType = {
	dispatch: () => {},
	REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
	dimensions: { w: 0, h: 0, d: 0 },
};

const DimensionsContext = createContext<UseDimensionsContextType>(
	initDimensionsContextState
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const DimensionProvider = ({ children }: ChildrenType): ReactElement => {
	return (
		<DimensionsContext.Provider value={useDimensionsContext(initState)}>
			{children}
		</DimensionsContext.Provider>
	);
};

export default DimensionsContext;
