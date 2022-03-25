import React, { createContext, useEffect, useReducer } from 'react';
import { reducer } from './Reducer';

const initialState = {
    favoriteAuthors: [],
};
export const AuthorContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState, () => {
        const localData = window.localStorage.getItem('favoriteAuthors');
        const favAuthor = JSON.parse(localData);
        return {
            favoriteAuthors: favAuthor ? favAuthor.favoriteAuthors : [],
        };
    });

    // set favorite data to loaclStorage 
    useEffect(()=> {
        window.localStorage.setItem('favoriteAuthors', JSON.stringify(state));
    }, [state])

    const addToFaborite = (author) => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: author,
        });
    };

    const removeFromFaborite = (id) => {
        dispatch({
            type: 'REMOVE_FROM_FAVORITE',
            payload: id,
        });
    };
    return (
        <AuthorContext.Provider
            value={{
                authors: state.authors,
                favoriteAuthors: state.favoriteAuthors,
                addToFaborite,
                removeFromFaborite,
            }}
        >
            {children}
        </AuthorContext.Provider>
    );
};

export default ContextProvider;
