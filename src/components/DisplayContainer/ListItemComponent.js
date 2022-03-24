import React, { useContext } from 'react';
import listStyle from '../../asset/ListItemComponent.module.css';
import { AuthorContext } from '../../context/State';

const ListItemComponent = ({ author }) => {
    const { addToFaborite, removeFromFaborite } = useContext(AuthorContext);
    return (
        <div className={listStyle.listContainer}>
            <div>
                <h4 className={listStyle.author_name}>{author?.name}</h4>
                <h5 className={listStyle.author_bio}>
                    Biography: {author?.bio}
                </h5>
                <a
                    className={listStyle.author_link}
                    href={author?.link}
                    rel="noreferrer"
                    target="_blank"
                >
                    author link
                </a>
            </div>
            <div>
                <button
                    className={listStyle.addBtn}
                    onClick={() => addToFaborite(author)}
                >
                    Add favorite
                </button>
                <button
                    className={listStyle.removeBtn}
                    onClick={() => removeFromFaborite(author._id)}
                >
                    Remove favorite
                </button>
            </div>
        </div>
    );
};

export default ListItemComponent;
