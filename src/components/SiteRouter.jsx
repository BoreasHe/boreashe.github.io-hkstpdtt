import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { NavBarContextProvider } from "../context/NavBarContext"
import { AboutPage } from "../pages/AboutPage"
import { DiscoverPage } from "../pages/DiscoverPage"
import { MapviewPage } from "../pages/MapviewPage"
import { ForecastPage } from "../pages/ForecastPage"
import { VerticalNavBar } from "./VerticalNavBar"

export const SiteRouter = () => {
    return (
        <BrowserRouter basename={"hkstpdtt"}>
            <NavBarContextProvider>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                    <VerticalNavBar />
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