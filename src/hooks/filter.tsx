import { useContext } from 'react';
import FilterContext, { useFilterContextType } from '../FilterContext';

const useFilter = (): useFilterContextType => {
	return useContext(FilterContext);
};

export default useFilter;
