import React, {memo, useState} from "react";
import ArrowDownIcon from '../../public/keyboard-arrow-down.svg';

import * as S from './styled';

type OptionType = {
    label: string;
    value: string;
}

type SelectPropsType = {
    value: string
    onChange: (value: string) => void
    options: OptionType[]
    name: string
}

function Select({value, name, options, onChange}: SelectPropsType) {
    const [isActive, setIsActive] = useState(false);

    const selectedItem = options.find(i => i.value === value);
    const toggleItems = () => setIsActive(!isActive);

    const onChangeCallback = (value: string) => {
        onChange(value);
        toggleItems();
    }

    const mappedOptions = options.map((o) => (
        <S.Option
            key={o.value}
            onClick={() => onChangeCallback(o.value)}
        >
            {o.label}
        </S.Option>
    ));

    return (
        <S.SelectContainer>
            <label>{name}</label>
            <div>
                <S.Title onClick={toggleItems}>
                    <span>{selectedItem && selectedItem.label}</span>
                    <ArrowDownIcon />
                </S.Title>
                {isActive &&
                    <S.Select>
                        {mappedOptions}
                    </S.Select>
                }
            </div>
        </S.SelectContainer>
    )
}

export default memo(Select)
