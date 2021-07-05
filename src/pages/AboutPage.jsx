import { Grid, Typography } from "@material-ui/core"
import { DashboardCard } from "../components/DashboardCard"
import { Scrollbars } from 'react-custom-scrollbars-2';

import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';

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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <DashboardCard title={"Introduction"} subtitle={"The reason of developing this site"} loading={false}>
                                        <div style={{ textAlign: "left", margin: 20, fontSize: 18, lineHeight: 1.75 }}>
                                            <p>
                                                As the footer have stated, this website is a project website for Hong Kong Science Park DeepTech Talents Training Programme.
                                                The programme introduced a mini project on predicting the vacancy of carparks in Hong Kong.
                                                I and my teammates had successfully developed a machine learning model by on Tree-based model in Python.
                                                And I would like to take this opportunity to create a website for this project.
                                            </p>
                                            <p>
                                                P.S. Website design and development by myself 🧙‍♂️<br />
                                                Warning: This website is not intended to be fully responsive! Best fit at 1920*1080.
                                            </p>
                                            <p>
                                                Credit to my teammates: Anson, Ben and Hugo.
                                            </p>
                                        </div>
                                    </DashboardCard>
                                </Grid>

                                <Grid item xs={12}>
                                    <DashboardCard title={"Limitations"} subtitle={"Why are some data is missing"} loading={false}>
                                        <div style={{ textAlign: "left", margin: 20, fontSize: 18, lineHeight: 1.75 }}>
                                            <p>
                                                Hong Kong lacks a centralized euquiry system that provides real time vacancy information to citizens.
                                                The carpark vacancy data provided by the governemnt also does not update regularly, causing inaccuracy of data at a specific time.
                                                As you can see in the "Discover" page, about 2/3 of the listed carpark can not provide useful infomation.
                                            </p>
                                            <p>
                                                The current governemnt API (Jul, 2021) is not dynamic enough for retrieving seperate carpark data at a specific time.
                                                Huge amount of redundant data costs ridiculous bandwidth use.
                                                Thus, I gave up developing the visualization of time trend of vacancies for carparks, and others.
                                            </p>
                                        </div>
                                    </DashboardCard>
                                </Grid>

                                <Grid item xs={12}>
                                    <DashboardCard title={"Tech Stack"} subtitle={"What frameworks are involved"} loading={false}>
                                        <div style={{ textAlign: "left", margin: 20, fontSize: 18, lineHeight: 1.75 }}>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Major tools:</span> Node.js, React.js, HTML, CSS, JavaScript
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>API fetching:</span> axios, react-query
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Map:</span> Mapbox GL
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>UI:</span> Material UI, chroma.js, Framer Motion
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Data visualization:</span> Nivo
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Model development:</span> Python and its boys
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Backend:</span> Django
                                            </p>
                                            <p>
                                                <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>Misc:</span> react-router-dom, gh-pages, date-fns
                                            </p>
                                        </div>
                                    </DashboardCard>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <DashboardCard title={"Changelog"} subtitle={"The history"} loading={false}>
                                <ChangeLog />
                            </DashboardCard>
                        </Grid> */}
                    </Grid>
                </div>
            </Scrollbars>
        </div>
    )
}

const ChangeLog = () => (
    <Timeline align="alternate">
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    9:30 am
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                        Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    10:00 am
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="primary">
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                        Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                    <HotelIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary">
                    <RepeatIcon />
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3}>
                    <Typography variant="h6" component="h1">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
)