import React from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';

const Navbar = () => {
  const { loading, error, user } = useProfile();
  getGames({ id: '511554', name: 'Arknights' }).then(console.log);
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        <a href="#">Sfoglia categorie</a>
        <a href="#">Top games</a>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
