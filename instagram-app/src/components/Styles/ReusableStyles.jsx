const FlexFunc = (direction, justifyC, alignI) => {
	return( `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `)
};

export default FlexFunc;
