import { DashboardCard } from "../DashboardCard";

export const LimitationCard = () => (
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
)