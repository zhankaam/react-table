import React from 'react'
import {filterRows} from "../helpers";
import FilterType, {AuditType} from "../helpers/types";
import {auditlogs} from "../helpers/mocks";

let rows: AuditType[]
let filterData: FilterType;

beforeEach(() => {
    rows = []
    filterData = {
        actionType: '',
        applicationType: '',
        applicationId: '',
        startDate: '',
        endDate: ''
    }
})

test('if the data is empty, then an empty array should be returned', () => {
    const filteredRows = filterRows(rows, filterData);

    expect(filteredRows.length).toBe(rows.length)
    expect(filteredRows).toEqual([])
})

test('if there is no filter, then it should return the data without change', () => {
    rows = auditlogs;
    const filteredRows = filterRows(rows, filterData);

    expect(filteredRows.length).toBe(rows.length)
    expect(filteredRows).toStrictEqual(rows)
})

test('if there is an action type should be filtered by it', () => {
    rows = auditlogs
    filterData = {
        ...filterData,
        actionType: 'DARI_REFRESH_TOKEN',
    }
    const filteredRows = filterRows(rows, filterData);

    expect(filteredRows.length).toBe(3)
    expect(filteredRows[0].actionType).toBe(filterData.actionType)
})

test('if there is an application type should be filtered by it', () => {
    rows = auditlogs
    filterData = {
        ...filterData,
        applicationType: 'LEASE_REGISTRATION',
    }
    const filteredRows = filterRows(rows, filterData);

    expect(filteredRows.length).toBe(2)
    expect(filteredRows[0].applicationType).toBe(filterData.applicationType)
})

test('if there is an applicationId should be filtered by it', () => {
    rows = auditlogs
    filterData = {
        ...filterData,
        applicationId: '657',
    }
    const filteredRows = filterRows(rows, filterData);
    const applicationId = String(filteredRows[0].applicationId)

    expect(filteredRows.length).toBe(1)
    expect(applicationId).toContain(filterData.applicationId)
})

test('if there is a start date and an end date, then filter the data by them', () => {
    rows = auditlogs
    filterData = {
        ...filterData,
        startDate: '2022-01-31',
        endDate: '2022-12-16'
    }
    const filteredRows = filterRows(rows, filterData);
    const date = new Date(filteredRows[0].creationTimestamp);
    const start = new Date(filterData.startDate);

    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript counts months from 0 to 11:

    expect(filteredRows.length).toBe(4)
    expect(year).toEqual(start.getFullYear())
    expect(day).toEqual(start.getDate())
    expect(month).toEqual(start.getMonth() + 1)
})

test('if we have multiple values in the filter, should perform a multi filter', () => {
    rows = auditlogs
    filterData = {
        applicationType: 'CERT_TITLE_DEED_PLOT',
        actionType: 'INITIATE_APPLICATION',
        applicationId: '3',
        startDate: '2021-11-29',
        endDate: '2022-12-16'
    }
    const filteredRows = filterRows(rows, filterData);
    const applicationId = String(filteredRows[0].applicationId);
    const date = new Date(filteredRows[0].creationTimestamp);
    const start = new Date(filterData.startDate);
    const year = date.getFullYear();

    expect(filteredRows.length).toBe(3)
    expect(filteredRows[0].actionType).toBe(filterData.actionType)
    expect(filteredRows[0].applicationType).toBe(filterData.applicationType)
    expect(applicationId).toContain(filterData.applicationId)
    expect(year).toBe(start.getFullYear())
})

