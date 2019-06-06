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
	width: ${props => props.inputWidth || '70%'};
	height: 1.5rem;
`;
