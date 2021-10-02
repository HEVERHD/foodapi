import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Recipe from './recipe';

const RecipeListstyled = styled.div`
	display: grid;
	grid-row-gap: 2.3em;
    grid-templa;
	background: var(--background);
    justify-content: center;
	border: 1px solid red;
	padding: 4em 2em;
`;

function RecipeList() {
	const [recipeList, setRecipeList] = useState([]);
	const APIKEY = '84dcd411afd2458b8664853c6c65a572';
	useEffect(() => {
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setRecipeList(data.results);
				console.log(data);
			})
			.catch(() => {
				console.log('hubo un Error');
			});
	}, []);
	return (
		<RecipeListstyled>
			{recipeList.map((recipe) => {
				return (
					<Recipe imagen={recipe.image} name={recipe.title} tipodieta='medio' />
				);
			})}
		</RecipeListstyled>
	);
}

export default RecipeList;
