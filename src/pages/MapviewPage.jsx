import { lazy, Suspense } from 'react';
import { LoadingPanel } from "../components/LoadingPanel";

const MapBoxMap = lazy(() => import('../components/MapBoxMap'))

export const MapviewPage = () => (
    <div style={{ margin: 40, width: "100%", position: "relative", borderRadius: 25 }}>
        <Suspense fallback={<LoadingPanel open />}>
            <MapBoxMap />
        </Suspense>
    </div>
);