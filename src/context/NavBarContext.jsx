import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavBarContext = createContext();

export const NavBarContextProvider = (props) => {

    const location = useLocation();

    const { children } = props;

    useEffect(() => {
        setPage(location.pathname === "/" ? "/discover" : location.pathname);
    }, [])

    const setPage = (pageName) => {
        setConfig(prev => { return { ...prev, page: pageName }; });
    };

    const setMapviewMarker = (on) => {
        setConfig(prev => { return { ...prev, mapviewMarker: on }; });
    };

    const setMapviewMissing = (on) => {
        setConfig(prev => { return { ...prev, mapviewMissing: on }; });
    };

    const setMapviewTraffic = (on) => {
        setConfig(prev => { return { ...prev, mapviewTraffic: on }; });
    };

    const initNavBarConfig = {
        page: "",
        setPage: setPage,
        mapviewMarker: true,
        setMapviewMarker: setMapviewMarker,
        mapviewMissing: false,
        setMapviewMissing: setMapviewMissing,
        mapviewTraffic: false,
        setMapviewTraffic: setMapviewTraffic,
    };

    const [config, setConfig] = useState(initNavBarConfig);

    return (
        <NavBarContext.Provider value={config}>
            {children}
        </NavBarContext.Provider>
    )
}