import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

const igLogo = <FontAwesomeIcon icon={faInstagram} />;
const profileIcon = <FontAwesomeIcon icon={faUser} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const discoverIcon = <FontAwesomeIcon icon={faCompass} />;

const SearchBar = ({ searchQuery, searchChangeHandler }) => {
	return (
		<nav>
			<div className="nameLogo">
				<div className="logo">{igLogo}</div> <div>|</div>
				<div className="logoText">
					Instagram
				</div>
			</div>
			<input
				className="searchInput"
				type="text"
				placeholder="Search"
				onChange={searchChangeHandler}
				value={searchQuery}
			/>
			<div className="navIcons">
				<div>{discoverIcon} </div> <div>{heartIcon}</div>
				<div>{profileIcon}</div>
			</div>
		</nav>
	);
};

export default SearchBar;
