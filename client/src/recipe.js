import React from 'react';
import styled from 'styled-components';

const RecipeStyled = styled.div``;

function Recipe({ imgplato }) {
	return (
		<RecipeStyled>
			Recipe
			<img src={imgplato} alt='' />;
		</RecipeStyled>
	);
}

export default Recipe;
