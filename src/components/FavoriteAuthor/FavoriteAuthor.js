import React, { useContext } from 'react';
import favAuthorStyle from '../../asset/FavoriteAuthor.module.css';
import { AuthorContext } from '../../context/State';
import ListItemComponent from '../common/ListItemComponent';

const FavoriteAuthor = () => {
    const { favoriteAuthors } = useContext(AuthorContext);

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
                    {favoriteAuthors.map((author) => (
                        <ListItemComponent
                            key={author._id}
                            author={author}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteAuthor;
