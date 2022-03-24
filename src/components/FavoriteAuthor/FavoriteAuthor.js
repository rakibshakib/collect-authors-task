import React, { useContext } from 'react';
import { AuthorContext } from '../../context/State';

const FavoriteAuthor = () => {
    const { favoriteAuthors } = useContext(AuthorContext);
    console.log(favoriteAuthors);
    return <div>FavoriteAuthor</div>;
};

export default FavoriteAuthor;
