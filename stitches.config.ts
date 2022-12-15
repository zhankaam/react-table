import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
    theme: {
        fonts: {
            fontFamily: 'Century Gothic',
        },
        colors: {
            white: '#FFFFFF',
            blue: '#10489B',
            whiteSmoke: '#F1F1F1',
            silver: '#C2C2C2',
            darkGrey: '#404950',
            azureishWhite: '#e2e9f3',
            lightBlue: '#7392c4',
            darkBlue: '#2f3941',
        },
    },
});
