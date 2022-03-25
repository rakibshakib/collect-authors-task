import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asset/main.css';
import AuthorsComponent from './components/AuthorContainer/AuthorsComponent';
import FavoriteAuthor from './components/FavoriteAuthor/FavoriteAuthor';
import Menu from './components/Menu/Menu';
import AuthorData from './context/AuthorData';
import ContextProvider from './context/State';

function App() {
    return (
        <ContextProvider>
            <AuthorData>
                <BrowserRouter>
                    <h4>Authors</h4>
                    <div className="container">
                        <div className="menu-bar">
                            <Menu />
                        </div>
                        <div className="display-container">
                            <Routes>
                                <Route
                                    path="/authors"
                                    element={<AuthorsComponent />}
                                />
                                <Route
                                    path="/"
                                    element={<AuthorsComponent />}
                                />
                                <Route
                                    path="/favorite-author"
                                    element={<FavoriteAuthor />}
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
