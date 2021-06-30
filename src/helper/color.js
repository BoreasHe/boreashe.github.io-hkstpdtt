import chroma from "chroma-js";

export const interpolatedColors = chroma.scale(["red", "green"]).colors(10).map(c => chroma(c).luminance(Math.min(Math.max(chroma(c).luminance(), 0.3), 0.8)).hex());

export const getColorAt = (num) => {
    if (num > 9)
        num = 9;

    return interpolatedColors[num];
}