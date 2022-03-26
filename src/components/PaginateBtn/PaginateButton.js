import React, { useContext } from 'react';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import paginate from '../../asset/PaginateBtn.module.css';
import { AuhtorDisplayingData } from '../../context/AuthorData';
const PaginateButton = () => {
    const { handlePrevoiusBtn, handleNextBtn, countPage } =
        useContext(AuhtorDisplayingData);
    return (
        <div className={paginate.buttonContainer}>
            <div className={paginate.btnStyle}>
                <button className={paginate.btn} onClick={handlePrevoiusBtn}>
                    {' '}
                    <GrCaretPrevious className={paginate.btnIcon} />&nbsp; 
                </button>
                <h4 className={paginate.countpage}>Page: &nbsp; {countPage} </h4>
                <button className={paginate.btn} onClick={handleNextBtn}>
                    
                     &nbsp; <GrCaretNext className={paginate.btnIcon} /></button>
            </div>
        </div>
    );
};

export default PaginateButton;
