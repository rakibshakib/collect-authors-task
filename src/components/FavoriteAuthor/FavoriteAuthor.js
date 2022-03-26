import React, { useContext } from 'react';
import favAuthorStyle from '../../asset/FavoriteAuthor.module.css';
import { AuthorContext } from '../../context/State';
import ListItemComponent from '../common/ListItemComponent';

const FavoriteAuthor = () => {
    const { favoriteAuthors } = useContext(AuthorContext);
    const authorPerPage = 4;
    const [currentPage, setCurrentPage] = React.useState(1);
    const indexOfLastAuthor = currentPage * authorPerPage;
    const indexOfFirstAuthor = indexOfLastAuthor - authorPerPage;
    const getCurrentPageAuthor = favoriteAuthors.slice(indexOfFirstAuthor, indexOfLastAuthor);

    const pageNumber = [];
    for (let i = 1; i < Math.ceil((favoriteAuthors.length+1) / authorPerPage); i++) {
    pageNumber.push(i);
    }
    const paginateHandeler = (num) => {setCurrentPage(num)};

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
                    {getCurrentPageAuthor.map((author) => (
                        <ListItemComponent
                            key={author._id}
                            author={author}
                        />
                    ))}
                </div>
            )}
            <div className={favAuthorStyle.pageBtnContainer}>
                <div>
                {pageNumber.map((number) => (
                    
                        <button className={favAuthorStyle.pageBtn} onClick={() => paginateHandeler(number)} key={number}>
                            {number}
                        </button>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default FavoriteAuthor;
