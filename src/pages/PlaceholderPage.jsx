import { LoadingPanel } from "./../components/LoadingPanel";

export const PlaceholderPage = () => (
    <div style={{ margin: 40, width: "100%", borderRadius: 25, position: "relative", overflow: "hidden" }}>
        <LoadingPanel open />
    </div>
);