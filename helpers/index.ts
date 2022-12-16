import FilterType, {AuditType} from "./types";

export function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0
}

export function filterRows(rows: AuditType[], filterData: FilterType) {
    if (isEmpty(filterData)) return rows;
    const {actionType, applicationType, applicationId,startDate,  endDate } = filterData;

    return rows.filter((row) => {
        const date = new Date(row.creationTimestamp);
        const start = new Date(startDate);
        const end = new Date(endDate);

        return (!actionType || row.actionType === actionType ) &&
            (!applicationType || row.applicationType === applicationType) &&
            (!applicationId || String(row.applicationId).includes(applicationId)) &&
            (!startDate || start <= date) &&
            (!endDate || end >= date)
    })
}
