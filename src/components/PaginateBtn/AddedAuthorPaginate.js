import React from 'react';
import favAuthorStyle from '../../asset/FavoriteAuthor.module.css';

const AddedAuthorPaginate = ({
    authorPerPage,
    totalAuthor,
    paginateHandeler,
}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalAuthor / authorPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <div>
            {pageNumber.map((number) => (
                <button
                    className={favAuthorStyle.pageBtn}
                    onClick={() => paginateHandeler(number)}
                    key={number}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default AddedAuthorPaginate;
