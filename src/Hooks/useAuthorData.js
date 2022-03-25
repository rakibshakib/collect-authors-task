import { useEffect, useState } from 'react';

const useAuthorData = () => {
    const [authors, setAuthors] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const limitAuhtor = 4;
    const [skipAuthor, setSkipAuthor] = useState(0);
    const [countPage, setCountPage] = useState(1);

    const handlePrevoiusBtn = () => {
        if (skipAuthor !== 0 && skipAuthor > 0) {
            setSkipAuthor((prev) => prev - 4);
            setCountPage((prev) => prev - 1);
        }
    };
    const handleNextBtn = () => {
        setSkipAuthor((prev) => prev + 4);
        setCountPage((prev) => prev + 1);
    };
    useEffect(() => {
        setIsloading(true);
        const authUrl = `https://api.quotable.io/authors?limit=${limitAuhtor}&skip=${skipAuthor}`;
        fetch(authUrl)
            .then((res) => res.json())
            .then((data) => {
                setAuthors(data.results);
                setIsloading(false);
            })
            .catch((err) => {
                setIsloading(false);
                console.log(err);
            });
    }, [limitAuhtor, skipAuthor]);
    return {
        authors,
        isLoading,
        handlePrevoiusBtn,
        handleNextBtn,
        countPage,
    };
};

export default useAuthorData;
