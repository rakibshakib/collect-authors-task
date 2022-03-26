import React from 'react';
import { NavLink } from 'react-router-dom';
import menuStyle from '../../asset/Menu.module.css';

const Menu = () => {
    return (
        <div className={menuStyle.menuBar}>
            <NavLink
                className={menuStyle.link}
                to="/authors"
            >
                <span className={menuStyle.authors}>Authors</span>
            </NavLink>
            <NavLink
           
                className={menuStyle.link}
                to="/favorite-author"
            >
                <span className={menuStyle.favAuthor}>Favorite Authors</span>
            </NavLink>
        </div>
    );
};

export default Menu;
