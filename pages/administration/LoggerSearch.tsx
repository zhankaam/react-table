import { PAGE_SIZE, Props } from '../../helpers/types';
import React, { useCallback, useMemo, useState } from 'react';
import FilterBar from '../../components/FilterBar';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import { filterRows } from '../../helpers';

import { columns } from '../../helpers/configs';
import * as S from '../../styles/styled';

function LoggerSearch({ auditLogs }: Props) {
  const [rows, setRows] = useState(auditLogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [actionType, setActionType] = useState('');
  const [applicationType, setApplicationType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [applicationId, setApplicationId] = useState('');

  const handleSearch = useCallback(() => {
    const filter = { actionType, applicationType, startDate, endDate, applicationId };

    setCurrentPage(1);
    setRows(filterRows(auditLogs, filter));
  }, [actionType, applicationType, startDate, endDate, applicationId, auditLogs]);

  const calculatedRows = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;

    return rows.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rows]);

  const clearAll = useCallback(() => {
    setCurrentPage(1);
    setActionType('');
    setApplicationType('');
    setStartDate('');
    setEndDate('');
    setApplicationId('');
    setRows(auditLogs);
  }, [auditLogs]);

  return (
    <>
      <FilterBar
        actionType={actionType}
        applicationType={applicationType}
        startDate={startDate}
        endDate={endDate}
        applicationId={applicationId}
        setActionType={setActionType}
        setApplicationType={setApplicationType}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setApplicationId={setApplicationId}
        handleSearch={handleSearch}
        clearAll={clearAll}
      />
      <S.TableContainer>
        <Table data={calculatedRows} columns={columns} />
        <Pagination
          totalItemsCount={rows.length}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
          onPageChanged={page => setCurrentPage(page)}
        />
      </S.TableContainer>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f');
  const data = await res.json();

  return {
    props: {
      auditLogs: data.result.auditLog,
    },
  };
}

export default LoggerSearch;
