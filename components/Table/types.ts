export interface IColumnType<T> {
  field: string;
  title: string;
  render?: (column: IColumnType<T>, item: T) => void;
}

export interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export type SortDirection = 'asc' | 'desc';
