
import React, { createContext, useEffect, useState } from 'react';

const ActiveContext = createContext();

const ActiveProvider = ({ children }) => {

    const [active, setActive] = useState("explore");

    const [loading, setLoading] = useState(false);

    const activeValue = { active, setActive };


    useEffect(() => {
        console.log(active);
    }, [active]);


    return (
        <ActiveContext.Provider value={activeValue}>
            {children}
        </ActiveContext.Provider>
    );
};

export { ActiveContext };
export default ActiveProvider;
