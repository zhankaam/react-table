import React from "react";
import { IColumnType } from "../components/Table/types";
import { AuditType } from "./types";

export const columns: IColumnType<AuditType>[] = [
    {
        field: "logId",
        title: "Log ID",
    },
    {
        field: "applicationType",
        title: "Application Type",
    },
    {
        field: "applicationId",
        title: "Application ID",
    },
    {
        field: "actionType",
        title: "Action",
    },
    {
        field: "source",
        title: "Action Details",
    },
    {
        field: "creationTimestamp",
        title: "Date: Time",
    },
];