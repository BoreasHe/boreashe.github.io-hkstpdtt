import { ListItemIcon, MenuItem, MenuList, Typography } from "@material-ui/core"
import { PinDrop, Traffic } from "@material-ui/icons"
import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { NavBarContext } from "../context/NavBarContext"

export const OverviewSideMenu = (props) => {

    const { open } = props

    const { overviewMarker, setOverviewMarker, overviewTraffic, setOverviewTraffic } = useContext(NavBarContext);

    const menuItemConfig = [
        {
            title: "Carpark Pin",
            icon: PinDrop,
            active: () => overviewMarker,
            func: () => setOverviewMarker(!overviewMarker)
        },
        {
            title: "Road Traffic",
            icon: Traffic,
            active: () => overviewTraffic,
            func: () => setOverviewTraffic(!overviewTraffic)
        },
    ]

    return (
        <AnimatePresence>
            {
                open &&

                <motion.div
                    key={`overview-side-menu`}
                    style={{ marginTop: 20 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                >
                    <MenuList style={{ backgroundColor: "#332E34", borderRadius: 20 }}>
                        {
                            menuItemConfig.map(config => (
                                <SideBarItem
                                    title={config.title}
                                    icon={config.icon}
                                    active={config.active()}
                                    func={config.func}
                                />
                            ))
                        }
                    </MenuList>
                </motion.div>
            }
        </AnimatePresence>
    )
}

const SideBarItem = (props) => {
    const { icon, title, active, func } = props;

    const IconComp = icon;

    return (
        <MenuItem style={{ borderRadius: 12, margin: "6px 10px" }} onClick={func}>
            <ListItemIcon >
                <IconComp style={{ color: active ? "#F0F9F3" : "#766E79", width: 31, height: 31, paddingLeft: 5 }} />
            </ListItemIcon>
            <Typography variant="h6" style={{ color: active ? "#F0F9F3" : "#766E79" }}>
                {title}
            </Typography>
        </MenuItem>
    );
}