import { Grid } from "@material-ui/core"
import { DistrictVacancyDistCard } from "./../components/Discover/DistrictVacancyDistCard"
import { TotalCarparkAmountCard } from "./../components/Discover/TotalCarparkAmountCard"
import { DistrictCarparkDistCard } from "./../components/Discover/DistrictCarparkDistCard"
import { LastUpdateDistCard } from "../components/Discover/LastUpdateDistCard";
import { Scrollbars } from 'react-custom-scrollbars-2';

export const DiscoverPage = () => (
    <div style={{ padding: 40, width: "100%", overflow: "hidden" }}>
        <Scrollbars
            style={{ overflowX: "hidden" }}
            renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
            renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
            autoHide
            renderView={props => (
                <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
            )}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <TotalCarparkAmountCard />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <DistrictCarparkDistCard />
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <LastUpdateDistCard />
                </Grid>

                <Grid item xs={12}>
                    <DistrictVacancyDistCard />
                </Grid>

            </Grid>
        </Scrollbars>
    </div>
);