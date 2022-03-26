import React, { useContext, useState } from 'react';
import favAuthorStyle from '../../asset/FavoriteAuthor.module.css';
import { AuthorContext } from '../../context/State';
import ListItemComponent from '../common/ListItemComponent';
import AddedAuthorPaginate from '../PaginateBtn/AddedAuthorPaginate';

const FavoriteAuthor = () => {
    const { favoriteAuthors } = useContext(AuthorContext);
    const [currentPage, setCurrentPage] = useState(1);

    const authorPerPage = 4;

    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;
    const getCurrentDisplayingAuthor = favoriteAuthors.slice(
        indexOfFirstAuthor,
        indexOfLastAuthor
    );
    const paginateHandeler = (num) => {
        setCurrentPage(num);
    };

    return (
        <div className={favAuthorStyle.fabAuthor}>
            <h4 className={favAuthorStyle.favAuthorTitle}>
                All Your Favorite Author
            </h4>
            {favoriteAuthors.length === 0 ? (
                <div>
                    <h4 className={favAuthorStyle.favDontAddingTitle}>
                        You haven't added any author to your favorites list yet
                    </h4>
                </div>
            ) : (
                <div className={favAuthorStyle.favAuthorContainer}>
                    {getCurrentDisplayingAuthor.map((author) => (
                        <ListItemComponent key={author._id} author={author} />
                    ))}
                </div>
            )}
            <div className={favAuthorStyle.pageBtnContainer}>
                <AddedAuthorPaginate
                    authorPerPage={authorPerPage}
                    totalAuthor={favoriteAuthors.length + 1}
                    paginateHandeler={paginateHandeler}
                />
            </div>
        </div>
    );
};

export default FavoriteAuthor;
