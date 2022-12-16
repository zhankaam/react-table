import React, {Dispatch, memo, SetStateAction, useCallback} from "react";
import FilterType from "../../helpers/types";

import Select from "../Select";
import Input from "../TextField";
import Button from "../Button";

import {actionOptions, applicationOptions} from "./constants";
import * as S from './styled';

type Props = FilterType & {
    setActionType: Dispatch<SetStateAction<string>>;
    setApplicationType: Dispatch<SetStateAction<string>>;
    setStartDate: Dispatch<SetStateAction<string>>;
    setEndDate: Dispatch<SetStateAction<string>>;
    setApplicationId: Dispatch<SetStateAction<string>>;
    handleSearch: () => void;
    clearAll: () => void;
}

const FilterBar = ({
                       actionType,
                       applicationType,
                       startDate,
                       endDate,
                       applicationId,
                       handleSearch,
                       clearAll,
                       setActionType,
                       setApplicationType,
                       setStartDate,
                       setEndDate,
                       setApplicationId
                   }: Props) => {
    const onActionTypeChange = useCallback((newActionType: string) => {
        setActionType(newActionType)
    }, [setActionType]);

    const onApplicationTypeChange = useCallback((newApplicationType: string) => {
        setApplicationType(newApplicationType)
    }, [setApplicationType]);

    const onStartDateChange = useCallback((newStartDate: string) => {
        setStartDate(newStartDate);
    }, [setStartDate]);

    const onEndDateChange = useCallback((newEndDate: string) => {
        setEndDate(newEndDate);
    }, [setEndDate]);

    const onApplicationIdChange = useCallback((newApplicationId: string) => {
        setApplicationId(newApplicationId);
    }, [setApplicationId]);

    return (
        <S.Container>
            <Select name="Action Type"
                    options={actionOptions}
                    value={actionType}
                    onChange={onActionTypeChange}/>
            <Select name="Application Type"
                    options={applicationOptions}
                    value={applicationType}
                    onChange={onApplicationTypeChange}/>
            <Input name="From Date"
                   placeholder="Select date"
                   type="date"
                   value={startDate}
                   onValueChange={onStartDateChange}/>
            <Input name="To Date"
                   placeholder="Select date"
                   type="date"
                   value={endDate}
                   onValueChange={onEndDateChange}/>
            <Input
                name="Application ID"
                placeholder="e.g. 219841/2021"
                type="text"
                value={applicationId}
                onValueChange={onApplicationIdChange}/>
            <Button name="Search Logger" onClick={handleSearch} />
            <Button name="Clear All" onClick={clearAll} />
        </S.Container>
    );
};

export default memo(FilterBar);