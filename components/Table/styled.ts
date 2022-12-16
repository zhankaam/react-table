import { styled } from '@stitches/react';

const TableWrapper = styled('table', {
  borderCollapse: 'collapse',
  border: 'none',
  webkitBoxShadow: '1px 0px 14px -6px rgba(0, 0, 0, 0.2)',
  mozBoxShadow: '1px 0px 14px -6px rgba(0, 0, 0, 0.2)',
  boxShadow: '1px 0px 14px -6px rgba(0, 0, 0, 0.2)',
});

const TableHeaderCell = styled('th', {
  padding: 12,
  fontWeight: 500,
  textAlign: 'left',
  fontSize: 14,
  color: '$darkGrey',
  borderBottom: '2px solid $azureishWhite',
  width: '200px',

  '&:first-child': {
    borderTopLeftRadius: 12,
  },
  '&:last-child': {
    borderTopRightRadius: 12,
  },
});

const TableRowItem = styled('tr', {
  cursor: 'auto',
  borderBottom: '1.8px solid $azureishWhite',

  '&:last-child': {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

const TableCell = styled('td', {
  padding: 12,
  fontSize: 14,
  color: '$darkBlue',
});

const SortButton = styled('button', {
  background: 'none repeat scroll 0 0 transparent',
  border: 'medium none',
  verticalAlign: 'inherit',

  '& svg': {
    height: 20,
    width: 20,
    fill: '$lightBlue',
  },
});

export { TableWrapper, TableHeaderCell, TableRowItem, TableCell, SortButton };
