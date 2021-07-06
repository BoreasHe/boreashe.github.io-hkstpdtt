import { ListItemIcon, MenuItem, MenuList } from "@material-ui/core";
import { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";
import { menuItemConfig } from "./VerticalNavBar";

export const BottomNavBar = () => {

    const { page, setPage } = useContext(NavBarContext);

    const handleChangePage = (page) => {
        console.log(page);
        setPage(page);
    }

    return (
        <MenuList
            style={{
                background: "#3D373E",
                borderRadius: "20px 20px 0 0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "center",
                height: "60px",
                position: "fixed",
                bottom: 0,
                zIndex: 100,
                width: "100%",
                padding: 0
            }}
        >
            {
                menuItemConfig.map(config => (
                    <HorizontalNavBarItem
                        key={`nav-${config.title}`}
                        {...config}
                        active={page === config.route}
                        onChangePage={() => handleChangePage(config.route)}
                    />
                ))
            }
        </MenuList>
    )
}

const HorizontalNavBarItem = (props) => {
    const { icon, title, route, active, onChangePage } = props;

    const IconComp = icon;

    return (
        <div style={{ textDecoration: 'none', color: 'inherit', flex: 1 }}>
            <MenuItem style={{ borderRadius: 12, margin: "6px 2px", display: "flex", justifyContent: "center" }} onClick={() => onChangePage(route)}>
                <ListItemIcon style={{ minWidth: 0, paddingLeft: 0 }}>
                    <IconComp style={{ color: active ? "#F0F9F3" : "#766E79", width: 31, height: 31, paddingLeft: 0 }} />
                </ListItemIcon>
            </MenuItem>
        </div>
    );
}