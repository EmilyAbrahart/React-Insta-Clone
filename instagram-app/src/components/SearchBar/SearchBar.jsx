import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
	faUser,
	faHeart,
	faCompass
} from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { FlexFunc, Input } from './../Styles/ReusableStyles';

const igLogo = <FontAwesomeIcon icon={faInstagram} />;
const profileIcon = <FontAwesomeIcon icon={faUser} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;
const discoverIcon = <FontAwesomeIcon icon={faCompass} />;

const HeaderElement = styled.header`
	${FlexFunc('row', 'space-between', 'center')};
	margin: 0 auto;
	padding: 1rem 4rem 1rem 4rem;
	font-size: 1.5rem;
	border-bottom: 1px solid rgba(211, 211, 211, 0.5);
	border-width: 90%;

	nav {
		display: flex;
		justify-content: space-between;
		width: 15%;

		div {
			cursor: pointer;
		}
	}
`;

const LogoContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')};
	font-size: 2rem;

	div {
		padding-right: 0.5rem;
	}
`;

const SearchBar = ({ searchQuery, searchChangeHandler }) => {
	return (
		<HeaderElement>
			<LogoContainer>
				<div className="logo">{igLogo}</div> <div>|</div>
				<div className="logoText">Instagram</div>
			</LogoContainer>
			<Input
				className="searchInput"
				type="text"
				placeholder="Search"
				onChange={searchChangeHandler}
				value={searchQuery}
				inputWidth="40%"
			/>
			<nav>
				<div>{discoverIcon} </div> <div>{heartIcon}</div>
				<div>{profileIcon}</div>
			</nav>
		</HeaderElement>
	);
};

export default SearchBar;
