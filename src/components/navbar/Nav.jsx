import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../store/user/user';
import logo from '../logo.jpg';
import './Nav.css';

const Nav = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="navigation-panel">
      <header>
        <div
          className={
            isMobile
              ? 'nav-icons-holder '
              : 'nav-icons-holder nav-mobile-border'
          }
        >
          <img src={logo} alt="Logo" className="logo" />
          <div className="nav-btn-holder">
            {!loggedIn && (
              <>
                <Link to="/login">
                  <button className="button-sign-log" type="submit">
                    Log in
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="button-sign-log" type="submit">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {loggedIn && (
              <button
                className="button-icon"
                type="submit"
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <i className="fas fa-times fa-2x" />
                ) : (
                  <i className="fas fa-bars fa-2x" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>
      {loggedIn && (
        <nav>
          <ul className={isMobile ? 'show-mobile-menu' : 'hide-mobile-menu'}>
            <li className="nav-list">
              <Link className="nav-link link-style" to="/resorts">
                Resorts
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link link-style" to="/reserve">
                Reserve
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link link-style" to="/reservations">
                My reservations
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link link-style" to="/addItem">
                Add resort
              </Link>
            </li>
            <li className="nav-list">
              <Link className="nav-link link-style" to="/deleteResorts">
                Delete resort
              </Link>
            </li>
            <li>
              <button
                className="button-sign-logout"
                type="button"
                onClick={() => dispatch(logOutUser())}
              >
                Log out
              </button>
            </li>
          </ul>
        </nav>
      )}
      <footer className={isMobile ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <ul className="footer-ul ul-style">
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://twitter.com/"
            >
              <i className="fab fa-twitter" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.facebook.com"
            >
              <i className="fab fa-facebook-f" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.google.com/"
            >
              <i className="fab fa-google-plus-g" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://vine.co/"
            >
              <i className="fab fa-vine" />
            </Link>
          </li>
          <li className="social-media-list">
            <Link
              className="social-media-link link-style"
              to="https://www.pinterest.com/"
            >
              <i className="fab fa-pinterest-p" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Nav;
