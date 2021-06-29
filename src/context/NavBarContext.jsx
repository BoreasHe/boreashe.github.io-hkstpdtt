import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarContextProvider = (props) => {

    const { children } = props;

    const setPage = (pageName) => {
        setConfig(prev => { return { ...prev, page: pageName }; });
    };

    const setOverviewMarker = (on) => {
        setConfig(prev => { return { ...prev, overviewMarker: on }; });
    };

    const setOverviewTraffic = (on) => {
        setConfig(prev => { return { ...prev, overviewTraffic: on }; });
    };

    const initNavBarConfig = {
        page: "Discover",
        setPage: setPage,
        overviewMarker: true,
        setOverviewMarker: setOverviewMarker,
        overviewTraffic: true,
        setOverviewTraffic: setOverviewTraffic,
    };

    const [config, setConfig] = useState(initNavBarConfig);

    return (
        <NavBarContext.Provider value={config}>
            {children}
        </NavBarContext.Provider>
    )
}