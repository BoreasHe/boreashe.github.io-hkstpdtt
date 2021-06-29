import { lazy, Suspense } from 'react';
import { LoadingPanel } from "./../components/LoadingPanel";

const MapBoxMap = lazy(() => import('../components/MapBoxMap'))

export const OverviewPage = () => (
    <div style={{ margin: 40, width: "100%", borderRadius: 25 }}>
        <Suspense fallback={<LoadingPanel open />}>
            <MapBoxMap />
        </Suspense>
    </div>
);