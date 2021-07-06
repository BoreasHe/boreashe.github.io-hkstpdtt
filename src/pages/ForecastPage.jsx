import { Grid } from "@material-ui/core";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ForecastCarparkVacancyByTimeCard } from "../components/Forecast/ForecastCarparkVacancyByTimeCard";
import { ForecastCarparkVacancyCard } from "../components/Forecast/ForecastCarparkVacancyCard";
import { ForecastDistrictVacancyCard } from "../components/Forecast/ForecastDistrictVacancyCard";

export const ForecastPage = () => (
    <div style={{ padding: 40, width: "100%", overflow: "hidden" }}>
        <Scrollbars
            style={{ overflowX: "hidden" }}
            renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
            renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
            autoHidef
            renderView={props => (
                <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
            )}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                    <ForecastCarparkVacancyCard />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
                    <ForecastCarparkVacancyByTimeCard />
                </Grid>
                <Grid item xs={12}>
                    <ForecastDistrictVacancyCard />
                </Grid>
            </Grid>
        </Scrollbars>
    </div>
)