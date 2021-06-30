import { LoadingPanel } from "./LoadingPanel";

export const DashboardCard = (props) => {
    const { children, icon, title, subtitle, loading } = props;

    return (
        <div style={{ backgroundColor: "#343035", borderRadius: 20 }}>
            <div style={{ padding: 20 }}>
                <div style={{ margin: "0px 20px 5px 20px", fontSize: 24, textAlign: "left", fontWeight: "bold", fontFamily: "AdobeClean" }}>
                    {title}
                </div>

                <div style={{ margin: "0px 20px 20px 20px", fontSize: 15, textAlign: "left", fontFamily: "AdobeClean", color: "#918795" }}>
                    {subtitle}
                </div>

                <div style={{ position: "relative" }}>
                    {children}
                    <LoadingPanel open={loading} />
                </div>
            </div>
        </div>
    )
}