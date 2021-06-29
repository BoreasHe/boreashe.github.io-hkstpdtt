import chroma from "chroma-js";

export const interpolatedColors = chroma.scale('Spectral').padding([0, 0.25]).colors(10);

export const getColorAt = (num) => {
    if (num > 9)
        num = 9;

    return interpolatedColors[num];
}