import {styled} from "@stitches/react";

const Container = styled("div", {
    backgroundColor: '$whiteSmoke',
    padding: '8px 0px',
    width: '100%',
    fontWeight: '500',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const PageNumber = styled("span", {
    padding: '4px',

    variants: {
        isActive: {
            true: {
                fontWeight: 'bold',
                fontSize: '20px',
                color: '$blue',
            }
        }
    }
});

export {Container, PageNumber};
