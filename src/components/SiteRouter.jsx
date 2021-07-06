import { useMediaQuery, useTheme } from "@material-ui/core"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { NavBarContextProvider } from "../context/NavBarContext"
import { AboutPage } from "../pages/AboutPage"
import { DiscoverPage } from "../pages/DiscoverPage"
import { ForecastPage } from "../pages/ForecastPage"
import { MapviewPage } from "../pages/MapviewPage"
import { BottomNavBar } from "./BottomNavBar"
import { VerticalNavBar } from "./VerticalNavBar"

export const SiteRouter = () => {

    const theme = useTheme();
    const isMiddle = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <BrowserRouter basename={"hkstpdtt"}>
            <NavBarContextProvider>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>

                    {
                        isMiddle
                            ? <VerticalNavBar />
                            : <BottomNavBar />
                    }

                    <Switch>
                        <Route exact path="/discover">
                            <DiscoverPage />
                        </Route>

                        <Route exact path="/mapview">
                            <MapviewPage />
                        </Route>

                        <Route exact path="/forecast">
                            <ForecastPage />
                        </Route>

                        <Route exact path="/about">
                            <AboutPage />
                        </Route>

                        <Redirect from="/" to="/discover" />
                    </Switch>
                </div>
            </NavBarContextProvider>
        </BrowserRouter>
    )
}