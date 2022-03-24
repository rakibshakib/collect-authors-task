export const reducer = (state, action) => {
    switch (action.type) {
        // case 'FETCH_SUCCESS':
        //     return {
        //         ...state,
        //         loading: false,
        //         authors: action.payload,
        //         error: '',
        //     };
        // case 'FETCH_FAILD':
        //     return {
        //         ...state,
        //         loading: false,
        //         authors: [],
        //         error: 'Errro to Load Data from API',
        //     };

        case 'ADD_TO_FAVORITE':
            const isExist = state.favoriteAuthors.find(
                (author) => author._id === action.payload?._id
            );
            if (!isExist) {
                return {
                    ...state,
                    favoriteAuthors: [...state.favoriteAuthors, action.payload],
                };
            }
        // eslint-disable-next-line no-fallthrough
        case 'REMOVE_FROM_FAVORITE':
            const remainingFavAuthors = state.favoriteAuthors.filter(
                (auth) => auth._id !== action.payload
            );
            return {
                ...state,
                favoriteAuthors: remainingFavAuthors,
            };
        default:
            return state;
    }
};
