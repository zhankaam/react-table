import { styled } from '@stitches/react';

const Button = styled('button', {
  display: 'inline-block',
  border: 'none',
  padding: '1rem 2rem',
  background: '$blue',
  color: '$white',
  fontFamily: '$fontFamily',
  fontSize: '1rem',
  cursor: 'pointer',
  textAlign: 'center',
  height: 'fit-content',
  borderRadius: '10px',
  alignSelf: 'flex-end',
});

export { Button };
