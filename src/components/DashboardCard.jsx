import { LoadingPanel } from "./LoadingPanel";

export const DashboardCard = (props) => {
    const { children, icon, title, subtitle, loading, headerDropdown, onSelectDropdown } = props;

    const HeaderDropdown = headerDropdown;

    return (
        <div style={{ backgroundColor: "#343035", borderRadius: 20, boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px" }}>
            <div style={{ padding: 20 }}>
                <div style={{ margin: "0px 20px 5px 20px", fontSize: 24, textAlign: "left", fontWeight: "bold", fontFamily: "AdobeClean", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {title}
                </div>

                {
                    subtitle &&
                    <div style={{ margin: "0px 20px 20px 20px", fontSize: 15, textAlign: "left", fontFamily: "AdobeClean", color: "#918795" }}>
                        {subtitle}
                    </div>
                }

                {
                    headerDropdown &&
                    <div style={{ margin: "25px 20px 20px 20px" }}>
                        <HeaderDropdown onChange={onSelectDropdown} />
                    </div>
                }

                <div style={{ position: "relative" }}>
                    {children}
                    <LoadingPanel open={loading} />
                </div>
            </div>
        </div>
    )
}