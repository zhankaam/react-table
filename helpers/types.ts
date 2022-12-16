export interface AuditType {
  logId: number;
  applicationId: number | null;
  applicationType: string | null;
  actionType: string;
  userId: number;
  creationTimestamp: string;
}

export interface Props {
  auditLogs: AuditType[];
}

type FilterType = Record<'actionType' | 'applicationType' | 'startDate' | 'endDate' | 'applicationId', string>;

export const PAGE_SIZE = 10;

export default FilterType;
