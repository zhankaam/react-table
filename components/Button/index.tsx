import React, {memo} from 'react';
import * as S from './styled';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: 'button' }

const Button = ({name, ...props}: Props) => (
    <S.Button {...props}>{name}</S.Button>
);

export default memo(Button);