import { DashboardCard } from "../DashboardCard";

export const TechStackCard = () => (
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
)