
import React from 'react'
import AppStore from './UserContext';


const AppContextProvider = ({ children }) => {
    const [user, setUser] = React.useState({firstName:'Avinash'});
    return (
        <AppStore.Provider value={{ user, setUser }}>
            {children}
        </AppStore.Provider>
    )
};

export default AppContextProvider;