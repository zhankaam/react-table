import {AuditType, FilterType} from "../pages/administration/types";

export function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0
}

export function filterRows(rows: AuditType[], filterData: FilterType) {
    if (isEmpty(filterData)) return rows;

    return rows.filter((row) => {
        const date = new Date(row.creationTimestamp);
        const start = new Date(filterData.startDate);
        const end = new Date(filterData.endDate);

        return (!filterData.actionType || row.actionType === filterData.actionType ) &&
            (!filterData.applicationType || row.applicationType === filterData.applicationType) &&
            (!filterData.applicationId || String(row.applicationId).includes(filterData.applicationId)) &&
            (!filterData.startDate || start <= date) &&
            (!filterData.endDate || end >= date)
    })
}
