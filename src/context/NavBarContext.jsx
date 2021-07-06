import { createContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const NavBarContext = createContext();

export const NavBarContextProvider = (props) => {

    const location = useLocation();
    const history = useHistory();

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

    useEffect(() => {
        history.push(config.page);
    }, [config.page])

    return (
        <NavBarContext.Provider value={config}>
            {children}
        </NavBarContext.Provider>
    )
}