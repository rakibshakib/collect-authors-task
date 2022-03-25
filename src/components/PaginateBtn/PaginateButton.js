import React, { useContext } from 'react';
import paginate from '../../asset/PaginateBtn.module.css';
import { AuhtorDisplayingData } from '../../context/AuthorData';
const PaginateButton = () => {
    const { handlePrevoiusBtn, handleNextBtn, countPage } =
        useContext(AuhtorDisplayingData);
    return (
        <div className={paginate.buttonContainer}>
            <div className={paginate.btnStyle}>
                <button onClick={handlePrevoiusBtn}>
                    {' '}
                    &lt;&lt; &nbsp; Previous
                </button>
                <h4 className={paginate.countpage}>Page: {countPage} </h4>
                <button onClick={handleNextBtn}>Next &nbsp; &gt; &gt;</button>
            </div>
        </div>
    );
};

export default PaginateButton;
