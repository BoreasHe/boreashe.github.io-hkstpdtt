import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { DiscoverPage } from "../pages/DiscoverPage"
import { OverviewPage } from "../pages/OverviewPage"
import { PlaceholderPage } from "../pages/PlaceholderPage"
import { VerticalNavBar } from "./VerticalNavBar"

export const SiteRouter = () => {
    return (
        <BrowserRouter basename={"hkstpdtt"}>
            <div style={{ display: "flex", width: "100%", height: "100%" }}>
                <VerticalNavBar />
                <Switch>
                    <Route exact path="/discover">
                        <DiscoverPage />
                    </Route>

                    <Route exact path="/overview">
                        <OverviewPage />
                    </Route>

                    <Route exact path="/carpark">
                        <PlaceholderPage />
                    </Route>

                    <Route exact path="/forecast">
                        <PlaceholderPage />
                    </Route>

                    <Route exact path="/about">
                        <PlaceholderPage />
                    </Route>

                    <Redirect from="/" to="/discover" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}