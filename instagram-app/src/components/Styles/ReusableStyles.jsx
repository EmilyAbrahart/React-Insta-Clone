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
	${FlexFunc(
		`${props => props.direction}`,
		`${props => props.justify}`,
		`${props => props.align}`
	)}
`;
