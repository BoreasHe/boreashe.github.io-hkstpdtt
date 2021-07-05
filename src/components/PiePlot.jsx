import { ResponsivePie } from "@nivo/pie";
import { useEffect } from "react";

export const PiePlot = ({ data, textSize, onFinishRender }) => {

    useEffect(() => {
        onFinishRender();
    }, []);

    return (
        <ResponsivePie
            theme={{
                fontFamily: 'AdobeClean',
                fontSize: textSize ?? 16
            }}
            data={data}
            colors={{ datum: "data.color" }}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={{ from: 'color' }}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        />
    )
}