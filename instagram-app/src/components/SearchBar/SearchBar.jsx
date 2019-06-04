import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const igLogo = <FontAwesomeIcon icon={faInstagram} />;
const profileIcon = <FontAwesomeIcon icon={faUser} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const discoverIcon = <FontAwesomeIcon icon={faCompass} />;
const searchIcon = <FontAwesomeIcon icon={faSearch} />;


const SearchBar = () => {
	return (
		<nav>
			<div className="nameLogo">{igLogo} | Instagram </div>
			<input className="searchInput" type="text" placeholder="Search" />
			<div className="navIcons">
				<div>{discoverIcon}</div> <div>{heartIcon}</div>
				<div>{profileIcon}</div>
			</div>
		</nav>
	);
};

export default SearchBar;
