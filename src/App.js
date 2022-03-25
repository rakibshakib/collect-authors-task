import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asset/main.css';
import Menu from './components/Menu/Menu';
import AuthorData from './context/AuthorData';
import ContextProvider from './context/State';

const AuthorsComponent = lazy(() =>
    import('./components/AuthorContainer/AuthorsComponent')
);
const FavoriteAuthor = lazy(() =>
    import('./components/FavoriteAuthor/FavoriteAuthor')
);

function App() {
    return (
        <ContextProvider>
            <AuthorData>
                <BrowserRouter>
                    <h4 className="title">Collects Authors</h4>
                    <div className="container">
                        <div className="menu-bar">
                            <Menu />
                        </div>
                        <div className="display-container">
                            <Routes>
                                <Route
                                    path="/authors"
                                    element={<Suspense fallback={<h5>Loading...</h5>}>
                                    <AuthorsComponent />
                                </Suspense>}
                                />
                                <Route
                                    path="/"
                                    element={<Suspense fallback={<h5>Loading...</h5>}>
                                    <AuthorsComponent />
                                </Suspense>}
                                />
                                <Route
                                    path="/favorite-author"
                                    element={<Suspense fallback={<h5>Loading...</h5>}>
                                    <FavoriteAuthor />
                                </Suspense>}
                                />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </AuthorData>
        </ContextProvider>
    );
}

export default App;
