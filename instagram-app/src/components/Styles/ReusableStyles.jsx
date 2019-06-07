import React from 'react';
import styled from 'styled-components';

export const FlexFunc = (direction, justifyC, alignI) => {
	return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};

export const ContainerDiv = styled.div`
	${FlexFunc('column', 'center', 'center')};
	width: 100%;
`;

export const Input = styled.input`
	text-align: center;
	border: 1px solid rgba(211, 211, 211, 0.8);
	border-radius: 0.5rem;
	width: ${props => props.inputWidth || '40%'};
	height: 1.5rem;
	outline: none;
	margin: ${props => props.inputMargin || '0'};
`;

export const LogoContainer = styled.div`
	${FlexFunc('row', 'space-between', 'center')};
	font-size: 2rem;

	div {
		padding-right: 0.5rem;
	}
`;

export const Button = styled.button`
background-color: palevioletred;
border: none;
border-radius: 1rem;
padding: 0.5rem 1.5rem;
font-size: 1.5rem;
color: white;
cursor: pointer;
`;
