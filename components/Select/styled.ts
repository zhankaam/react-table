import { styled } from '@stitches/react';

const SelectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

const Select = styled('div', {
  position: 'absolute',
  padding: '6px',
  border: '1px solid $silver',
  backgroundColor: '$white',
});

const Option = styled('div', {
  minWidth: '180px',
  minHeight: '36px',
  textAlign: 'center',

  '&:hover': {
    color: '$white',
    backgroundColor: '$blue',
    transition: 'all 0.2s ease-in-out',
  },
});

const Title = styled('div', {
  minWidth: '200px',
  minHeight: '36px',
  borderRadius: '10px',
  border: '1px solid $silver',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingRight: '10px',

  '& > span': {
    flex: 1,
    textAlign: 'center',
  },

  '& svg': {
    height: 16,
    width: 16,
    fill: '$silver',
    justifyContent: 'flex-end',
  },
});

export { SelectContainer, Select, Option, Title };
