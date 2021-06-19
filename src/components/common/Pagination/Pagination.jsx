import styles from './Pagination.module.css';

const {
    pagination,
    paginationItem,
    paginationLink,
    paginationLinkActive,
    prevBtn,
    nextBtn
} = styles;

const Pagination = ({ totalCount, itemsCountOnPage, currentPage, postionSize, handlePageClick }) => {    

    const pagesCount = Math.ceil(totalCount / itemsCountOnPage);

    const lastPortionNumber = Math.floor(pagesCount / postionSize);
    const currentPortion = Math.floor((currentPage - 1) / postionSize);

    const pages = [];

    for (let i = currentPortion * postionSize + 1; i <= (currentPortion + 1) * postionSize && i <= pagesCount; i++) {           
        
        pages.push(
            <span key={i} className={paginationItem}>
                <a
                    className={`${paginationLink} ${i === currentPage && paginationLinkActive}`}
                    href="#l"
                    onClick={ (e) => handlePageClick(e, i) }
                >
                    {i}
                </a>
            </span>
        );            
    }
    
    
    return (
        <div className={pagination}>
            <button
                className={prevBtn}
                disabled={currentPortion === 0}
                onClick={ (e) => handlePageClick(e, 1) }
            >
                &lt;&lt;
            </button>
            <button
                className={prevBtn}
                disabled={currentPortion === 0}
                onClick={ (e) => handlePageClick(e, (currentPortion - 1) * postionSize + 1) }
            >
                &lt;
            </button>
            {pages}
            <button
                className={nextBtn}
                disabled={currentPortion === lastPortionNumber}
                onClick={ (e) => handlePageClick(e, (currentPortion + 1) * postionSize + 1) }
            >
                &gt;
            </button>
            <button
                className={nextBtn}
                disabled={currentPortion === lastPortionNumber}
                onClick={ (e) => handlePageClick(e, pagesCount) }
            >
                &gt;&gt;
            </button>
        </div>
    );
}

export default Pagination;