import React, { useEffect, useState } from 'react';
import authorStyle from '../../asset/AuthorComponent.module.css';
import ListItemComponent from '../common/ListItemComponent';

const AuthorsComponent = () => {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        setIsloading(true);
        fetch('https://api.quotable.io/authors')
            .then((res) => res.json())
            .then((data) => {
                setAuthors(data.results);
                setIsloading(false);
            })
            .catch((err) => {
                setIsloading(false);
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div>
                <h4 className={authorStyle.author_Com_Title}>Author Profile</h4>
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
        </div>
    );
};

export default AuthorsComponent;
