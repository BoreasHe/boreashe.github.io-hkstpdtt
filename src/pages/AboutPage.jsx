import { Grid, Typography } from "@material-ui/core";
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { ChangeLogCard } from "../components/About/ChangeLogCard";
import { IntroductionCard } from "../components/About/IntroductionCard";
import { LimitationCard } from "../components/About/LimitationCard";
import { RoadMapCard } from "../components/About/RoadMapCard";
import { TechStackCard } from "../components/About/TechStackCard";


export const AboutPage = () => {
    return (
        <div style={{ padding: 40, width: "100%", maxHeight: "100%", overflow: "auto", overflowX: "hidden", display: "flex", justifyContent: "flex-start", flexDirection: "column", fontFamily: "AdobeClean" }}>
            <Scrollbars
                style={{ overflowX: "hidden" }}
                renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{ display: "none" }} />}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{ display: "none" }} />}
                autoHide
                renderView={props => (
                    <div {...props} style={{ ...props.style, overflowX: 'hidden' }} />
                )}
            >
                <div>
                    <Typography variant="h3" style={{ marginBottom: 15 }}>
                        Greetings.
                    </Typography>

                    <Typography variant="h5" style={{ marginBottom: 40 }}>
                        Entranc is a small-scale info site, providing carpark vacancy statistics and prediction service to users.
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <IntroductionCard />
                                </Grid>

                                <Grid item xs={12}>
                                    <LimitationCard />
                                </Grid>

                                <Grid item xs={12}>
                                    <TechStackCard />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <ChangeLogCard />
                                </Grid>
                                <Grid item xs={12}>
                                    <RoadMapCard />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Scrollbars>
        </div>
    )
}