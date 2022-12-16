import React, { useMemo, useState } from 'react';
import get from 'lodash.get';
import orderBy from 'lodash.orderby';

import ArrowUp from '../../public/arrow-up.svg';
import ArrowDown from '../../public/arrow-down.svg';

import { Props, SortDirection } from './types';
import * as S from './styled';

function Table<T>({ data, columns }: Props<T>): JSX.Element {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState<SortDirection>('asc');

  const handleSortingChange = (field: string) => {
    const sortOrder = field === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setOrder(sortOrder);
  };

  const sortedRows = useMemo(() => orderBy(data, [sortField], [order]), [data, order, sortField]);

  return (
    <S.TableWrapper>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => (
            <S.TableHeaderCell key={`table-head-cell-${columnIndex}`}>
              {column.title}
              <S.SortButton type="button" onClick={() => handleSortingChange(column.field)}>
                {order === 'asc' ? <ArrowUp /> : <ArrowDown />}
              </S.SortButton>
            </S.TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((item, itemIndex) => (
          <S.TableRowItem key={`table-body-${itemIndex}`}>
            {columns.map((column, columnIndex) => {
              const value = get(item, column.field);

              return <S.TableCell key={`table-row-cell-${columnIndex}`}>{value || '-/-'}</S.TableCell>;
            })}
          </S.TableRowItem>
        ))}
      </tbody>
    </S.TableWrapper>
  );
}

export default Table;
