import React, { useContext } from 'react';
import authorStyle from '../../asset/AuthorComponent.module.css';
import { AuhtorDisplayingData } from '../../context/AuthorData';
import ListItemComponent from '../common/ListItemComponent';
import PaginateButton from '../PaginateBtn/PaginateButton';

const AuthorsComponent = () => {
    const { authors, isLoading } = useContext(AuhtorDisplayingData);
    return (
        <div>
            <div>
                <h4 className={authorStyle.author_Com_Title}>
                    Authors Profile
                </h4>
            </div>
            <div>
                {isLoading ? (
                    <div>
                        <h4 className={authorStyle.loadingTitle}>
                            Loding Authors Profile......
                        </h4>
                    </div>
                ) : (
                    <div className={authorStyle.authorComponent}>
                        {authors.map((author) => (
                            <ListItemComponent
                                key={author._id}
                                author={author}
                            />
                        ))}
                    </div>
                )}
            </div>
            <PaginateButton />
        </div>
    );
};

export default AuthorsComponent;
