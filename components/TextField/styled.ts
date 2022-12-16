import { styled } from '@stitches/react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  '& > input': {
    borderRadius: '10px',
    border: '1px solid $silver',
    minHeight: '36px',
    minWidth: '200px',
    outline: 'none',
  },

  '& > input::-webkit-input-placeholder': {
    paddingLeft: '10px',
  },

  '& > input::-webkit-calendar-picker-indicator': {
    paddingRight: '10px',
    cursor: 'pointer',
    filter: 'invert(0.8)',
  },

  '& > input::-webkit-datetime-edit-month-field': {
    paddingLeft: '10px',
  },
});

export { Container };
