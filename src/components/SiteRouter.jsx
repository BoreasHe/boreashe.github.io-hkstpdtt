import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { DiscoverPage } from "../pages/DiscoverPage"
import { OverviewPage } from "../pages/OverviewPage"
import { VerticalNavBar } from "./VerticalNavBar"

export const SiteRouter = () => {
    return (
        <BrowserRouter>
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
                        <DiscoverPage />
                    </Route>

                    <Route exact path="/forecast">
                        <DiscoverPage />
                    </Route>

                    <Redirect from="/" to="/discover" />
                </Switch>
            </div>
        </BrowserRouter>
    )
}