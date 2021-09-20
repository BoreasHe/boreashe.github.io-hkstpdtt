import { Divider } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import { DashboardCard } from '../DashboardCard';

const changelogs = [
    {
        date: "02 Jul",
        version: "1.0",
        codename: "SCRYING",
        logs: [
            "✨ Carpark visualizations",
            "✨ Mapview of carpark vacancies",
            "✨ Other on-map utilities",
            "✨ Vacancy prediction service",
            "📝 This about section"
        ]
    },
    {
        date: "05 Jul",
        version: "1.1",
        codename: "IDENTIFY",
        logs: [
            "🐛 Fix on-map utilities not showing",
            "✏️ Fix the year typo in footer",
            "💄 Add scroll bar to Discover page"
        ]
    },
    {
        date: "06 Jul",
        version: "1.2",
        codename: "GUIDANCE",
        logs: [
            "📝 Add this change log",
            "📝 Add the roadmap",
            "📱 Enhance support for mobile devices",
            "💬 Add mailto in footer",
            "💄 Add scroll bar to Forcast page",
            "💄 Update some grid layouts",
            "💄 Adjusting some colors"
        ]
    },
    {
        date: "20 Sep",
        version: "1.2.1",
        codename: "",
        logs: [
            "🐛 Update basic info of car parks",
        ]
    }
]

export const ChangeLogCard = () => (
    <DashboardCard
        title={"Changelog"}
        subtitle={<>{"The history "}
            <span>
                {"(styling: "}
                <a href="https://gitmoji.dev" target="_blank" rel="noopener noreferrer">
                    <img style={{ borderRadius: 10 }} align="top" src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji" />
                </a>
                {" )"}
            </span>
        </>}
        loading={false}
    >
        <Timeline align="left" style={{ padding: "6px 0" }}>
            {
                changelogs.map((log, index) => <VersionLog {...log} last={index === changelogs.length - 1} />)
            }
        </Timeline>
    </DashboardCard>
)

const VersionLog = ({ date, version, logs, codename, last }) => (
    <TimelineItem style={{ paddingBottom: 20 }}>
        <TimelineOppositeContent style={{ flex: 0.15, paddingLeft: 0 }}>
            <span style={{ fontSize: 14 }}>
                {date}
            </span>
        </TimelineOppositeContent>

        <TimelineSeparator>
            <TimelineDot />
            {
                !last &&
                <TimelineConnector style={{ marginBottom: -20 }} />
            }
        </TimelineSeparator>

        <TimelineContent>
            <div style={{ backgroundColor: "#3B373C", width: "100%", borderRadius: 10, padding: "7px 5px 2px 5px" }}>
                <div style={{ textAlign: "left", fontSize: 22, marginLeft: 5, fontWeight: "bold", letterSpacing: 1 }}>
                    🔖 <span style={{ fontSize: 16 }}>v</span>
                    {version} <span style={{ fontSize: 10 }}>{codename}</span>
                </div>
                <Divider variant="middle" />
                {
                    logs.map(log => <ChangeLogEntry log={log} />)
                }
            </div>
        </TimelineContent>
    </TimelineItem>
)

const ChangeLogEntry = ({ log }) => (
    <div style={{ backgroundColor: "#4A464C", borderRadius: 5, margin: "10px 5px" }}>
        <div style={{ padding: 7, fontSize: 14, textAlign: "left" }}>
            {log}
        </div>
    </div>
)