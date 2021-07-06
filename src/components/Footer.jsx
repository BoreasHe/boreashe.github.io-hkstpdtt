import { useEffect, useState } from "react";

export const Footer = () => {
    return (
        <>
            <div style={{ width: "100%", fontFamily: "AdobeClean", color: "#766E79" }}>
                <Timer />
                <div style={{ fontSize: 18, fontWeight: "bold" }}>BOREAS HE © 2021</div>
                <div style={{ fontSize: 13, marginBottom: 10 }}>- Made for HKSTP DTT Hackathon -<br /></div>
                <a href="http://boreashe.github.io" style={{ color: "#766E79" }}>My Portfolio</a> | <a href="mailto:boreashe.hk@gmail.com" style={{ color: "#766E79" }}>Email me</a>
            </div>
        </>
    )
}

const Timer = () => {

    const [timeString, setTimeString] = useState();

    useEffect(() => {
        return setInterval(updateTime, 1000);
    })

    const updateTime = () => {
        const d = new Date();
        setTimeString(`${("0" + (d.getHours())).slice(-2)}:${("0" + (d.getMinutes())).slice(-2)}`);
    }

    return (
        <div style={{ fontSize: 60, marginBottom: 20 }}>
            {timeString}
        </div>
    )
}