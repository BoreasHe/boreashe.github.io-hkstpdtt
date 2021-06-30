import { ListItemIcon, MenuItem, MenuList, Typography } from '@material-ui/core';
import { DriveEta, Explore, ImportContacts, Map, Visibility } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { NavBarContext } from '../context/NavBarContext';
import Logo from "./../images/logo.png";
import { Footer } from "./Footer";
import { OverviewSideMenu } from './OverviewSideMenu';

const menuItemConfig = [
    {
        icon: Explore,
        title: "Discover",
        route: "/discover"
    },
    {
        icon: Map,
        title: "Overview",
        route: "/overview",
    },
    {
        icon: DriveEta,
        title: "Carpark",
        route: "/carpark"
    },
    {
        icon: Visibility,
        title: "Forecast",
        route: "/forecast"
    },
    {
        icon: ImportContacts,
        title: "About",
        route: "/about"
    }
]

export const VerticalNavBar = () => {

    const { page, setPage } = useContext(NavBarContext);

    const handleChangePage = (page) => {
        setPage(page);
    }

    return (
        <div style={{ minWidth: 225, maxWidth: 225, margin: "20px 10px 40px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
                <div style={{ margin: "30px 50px" }}>
                    <img src={Logo} alt="" style={{ width: "100%", height: "100%" }} />
                </div>

                <MenuList style={{ backgroundColor: "#332E34", borderRadius: 20 }}>
                    {
                        menuItemConfig.map(config => (
                            <VerticalNavBarItem
                                title={config.title}
                                icon={config.icon}
                                route={config.route}
                                active={page === config.title}
                                onChangePage={() => handleChangePage(config.title)}
                            />
                        ))
                    }
                </MenuList>

                <OverviewSideMenu open={page === "Overview"} />
            </div>

            <Footer />
        </div>
    );
}

const VerticalNavBarItem = (props) => {
    const { icon, title, route, active, onChangePage } = props;

    const IconComp = icon;

    return (
        <Link to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem style={{ borderRadius: 12, margin: "6px 10px" }} onClick={() => onChangePage(route)}>
                <ListItemIcon >
                    <IconComp style={{ color: active ? "#F0F9F3" : "#766E79", width: 31, height: 31, paddingLeft: 5 }} />
                </ListItemIcon>
                <Typography variant="h6" style={{ color: active ? "#F0F9F3" : "#766E79" }}>
                    {title}
                </Typography>
            </MenuItem>
        </Link>
    );
}