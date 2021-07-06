import { DashboardCard } from "../DashboardCard";

export const RoadMapCard = () => (
    <DashboardCard title={"Road Map"} subtitle={"The future development (maybe)"} loading={false}>
        <div style={{ textAlign: "left", margin: 20, fontSize: 18, lineHeight: 1.75 }}>
            <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>FRONTEND:</span>
            <p>
                Acutally I want to do the time trend visualization to let users to judge whether to trust the prediction result.
                But as I mentioned, the government API is just not good. Maybe I would send a email to them someday.
            </p>
            <p>
                A bug regarding the Material UI date picker: There is a default value inside the input field.
                But a user will still needed to click "OK" in the date picker in roder to trigger the fetching.
            </p>
            <span style={{ color: "#958997", textTransform: "uppercase", fontWeight: "bold", marginRight: 10 }}>BACKEND:</span>
            <p>
                Send a dummy request to the backend server on page load in order to wake up the heroku hosting, decreasing the meaningless query loading time.
            </p>
            <p>
                Continuously train the XGBoost model with real time data to keep it updated and become more accurate.
            </p>
        </div>
    </DashboardCard>
)