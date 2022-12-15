import React, {useState} from 'react';
import ArrowLeft from '../../public/arrow-left.svg';
import ArrowRight from '../../public/arrow-right.svg';
import * as S from './styled';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    portionSize?: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const PORTION_SIZE = 10;

const Pagination: React.FC<PropsType> = ({
                                             currentPage,
                                             totalItemsCount,
                                             pageSize ,
                                             portionSize = PORTION_SIZE,
                                             onPageChanged,
                                         }) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPrevButtonClick = () => setPortionNumber(portionNumber - 1)
    const onNextButtonClick = () => setPortionNumber(portionNumber + 1)

    return (
        <S.Container>
            {portionNumber > 1 &&
                <button onClick={onPrevButtonClick}><ArrowLeft/></button>}

            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => (
                    <S.PageNumber
                        key={page}
                        isActive={currentPage === page}
                        onClick={() => onPageChanged(page)}>
                        {page}
                    </S.PageNumber>
                ))}
            {portionCount > portionNumber && <button onClick={onNextButtonClick}><ArrowRight/></button>}
        </S.Container>
    )
}

export default Pagination;
