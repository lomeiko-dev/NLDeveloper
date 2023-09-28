import React, {useEffect, useState} from 'react';

interface IUsePaginationProps {
    container?: Element,
    total_count: number,
    limit: number,
    data_length: number
}
export const usePagination = (props: IUsePaginationProps) => {
    const {
        container,
        total_count,
        limit,
        data_length
    } = props;

    const [page, setPage] = useState(1);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        if(container){
            container.addEventListener("scroll", scrollHandler);
            return () => {
                container.removeEventListener("scroll", scrollHandler);
            }
        }
    }, []);

    const scrollHandler = () => {
        if(container){
            const {scrollHeight, scrollTop} = container;
            if (scrollHeight - (scrollTop +  window.innerHeight) < 100 && data_length < total_count + limit)
                setFetching(true);
        }
    };

    return {page, fetching}
};