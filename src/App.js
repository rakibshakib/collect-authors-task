import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './asset/main.css';
import AuthorsComponent from './components/DisplayContainer/AuthorsComponent';
import FavoriteAuthor from './components/FavoriteAuthor/FavoriteAuthor';
import Menu from './components/Menu/Menu';
import ContextProvider from './context/State';
function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
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
                            <Route path="/" element={<AuthorsComponent />} />
                            <Route
                                path="/favorite-author"
                                element={<FavoriteAuthor />}
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
