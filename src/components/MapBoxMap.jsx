import { LocationOnTwoTone } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { DataContext } from "../context/DataContext";
import { NavBarContext } from "../context/NavBarContext";
import { getColorAt } from "./../helper/color";
import { basicInfo } from "./../res/basicInfo";

export const MapBoxMap = () => {

    const { overviewMarker, overviewTraffic } = useContext(NavBarContext);
    const { updatedVacancy } = useContext(DataContext);

    const [markerList, setMarkerList] = useState();
    const [selectedId, setSelectedId] = useState();

    const [paVacancy, setPaVacancy] = useState();

    const [viewport, setViewport] = useState({
        latitude: 22.384523,
        longitude: 114.133201,
        zoom: 10.5
    });

    useEffect(() => {
        initMarkerList();
    }, []);

    useEffect(() => {
        if (updatedVacancy.data)
            mapPaVacancy(updatedVacancy.data);
    }, [updatedVacancy.data])

    const initMarkerList = () => {
        setMarkerList(basicInfo.map(carpark => {
            return {
                id: carpark.park_id,
                name: carpark.name_en,
                latitude: carpark.latitude,
                longitude: carpark.longitude
            }
        }))
    }

    const mapPaVacancy = (data) => {
        const aggregation = data.car_park.reduce((buffer, carpark) => {
            buffer[carpark.park_id] = {
                "vacancy": carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.vacancy ?? -1,
                "lastupdate": carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.lastupdate ?? "-"
            }
            return buffer;
        }, {})

        setPaVacancy(aggregation);
    }

    const openPopUp = (id) => {
        setSelectedId(id);
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ReactMapGL
                borderRadius={25}
                width="100%"
                height="100%"
                mapStyle={overviewTraffic ? "mapbox://styles/mapbox/navigation-night-v1" : "mapbox://styles/mapbox/dark-v10"}
                mapboxApiAccessToken="pk.eyJ1IjoiYm9yZWFzaGUiLCJhIjoiY2txZ2MxdHBoMDJxcTJwcm85NTM0MWI1bCJ9.AHoFkmdAIq-SFTf7mGwzoA"
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                {
                    markerList &&
                    markerList.map(marker => (
                        <Marker
                            longitude={marker.longitude}
                            latitude={marker.latitude}>
                            <LocationOnTwoTone
                                onMouseEnter={() => openPopUp(marker.id)}
                                onMouseLeave={() => openPopUp(undefined)}
                                style={{
                                    display: overviewMarker ? "initial" : "none",
                                    width: 36,
                                    height: 36,
                                    color: getColorAt(Math.floor(paVacancy[marker.id].vacancy / 50 * 10))
                                }}
                            />
                        </Marker>
                    ))
                }

                {
                    selectedId &&
                    <CarparkTooltip
                        closeTooltip={() => setSelectedId(undefined)}
                        marker={markerList.find(marker => marker.id === selectedId)}
                        detail={paVacancy[selectedId]}
                    />
                }
            </ReactMapGL>
        </div>
    )
}

const CarparkTooltip = (props) => {

    const { marker, detail, closeTooltip } = props;

    return (
        <Popup
            latitude={marker.latitude}
            longitude={marker.longitude}
            onClose={closeTooltip}
            closeButton={false}
            closeOnClick={false}
            offsetTop={-30}
        >
            <div style={{ margin: 10, color: "#2C292D", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 20, fontWeight: "bold", fontFamily: "AdobeClean", width: 150 }}>
                    {marker.name}
                </div>

                <div style={{ fontSize: 12, fontWeight: "bold", color: "#939293", marginTop: 10, fontFamily: "AdobeClean" }}>
                    LAST KNOWN VACANCY
                </div>

                <div style={{ color: getColorAt(Math.floor(detail.vacancy / 50 * 10)), fontSize: 60, fontWeight: "bold", lineHeight: "60px", marginBottom: 10, fontFamily: "AdobeClean" }}>
                    {detail.vacancy !== -1 ? detail.vacancy : "-"}
                </div>

                <div style={{ fontSize: 12, color: "#939293", fontFamily: "AdobeClean" }}>
                    Last Update: {detail.lastupdate}
                </div>
            </div>
        </Popup>
    )
};

export default MapBoxMap;