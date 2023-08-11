import { useContext } from 'react';
import DimensionsContext, { UseDimensionsContextType } from '../FilterContext';

const useDimensions = (): UseDimensionsContextType => {
	return useContext(DimensionsContext);
};

export default useDimensions;
