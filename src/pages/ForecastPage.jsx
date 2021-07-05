import { Grid } from "@material-ui/core"
import { ForecastCarparkVacancyByTimeCard } from "../components/Forecast/ForecastCarparkVacancyByTimeCard"
import { ForecastCarparkVacancyCard } from "../components/Forecast/ForecastCarparkVacancyCard"
import { ForecastDistrictVacancyCard } from "../components/Forecast/ForecastDistrictVacancyCard"

export const ForecastPage = () => (
    <div style={{ padding: 40, width: "100%", overflow: "hidden" }}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <ForecastCarparkVacancyCard />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                <ForecastCarparkVacancyByTimeCard />
            </Grid>
            <Grid item xs={12}>
                <ForecastDistrictVacancyCard />
            </Grid>
        </Grid>
    </div>
)