import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, memo } from 'react';
import * as S from './styled';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = DefaultInputPropsType & {
  name: string;
  onValueChange: (value: string) => void;
};

const Input = ({ name, onValueChange, ...props }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e.currentTarget.value);
  };

  return (
    <S.Container>
      <label>{name}</label>
      <input onChange={onChangeHandler} {...props} />
    </S.Container>
  );
};

export default memo(Input);
