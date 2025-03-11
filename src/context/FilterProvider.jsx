
import React, { createContext, useEffect, useState } from 'react';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {

    const [filter, setFilter] = useState();

    const [loading, setLoading] = useState(false);

    const filterValue = { filter, setFilter };



    useEffect(() => {
        console.log(filter);
    }, [filter]); 


    return (
        <FilterContext.Provider value={filterValue}>
            {children}
        </FilterContext.Provider>
    );
};

export { FilterContext };
export default FilterProvider;
