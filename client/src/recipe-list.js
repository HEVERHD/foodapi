import React, { useEffect } from 'react';
import styled from 'styled-components';
import Recipe from './recipe';
import { useSelector, useDispatch } from 'react-redux';

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
	const dispacht = useDispatch();
	const recipeList = useSelector((state) => state.recipeList);
	console.log('el estado total de mi app es ', recipeList);
	//const [recipeList, setRecipeList] = useState([]);
	const APIKEY = '84dcd411afd2458b8664853c6c65a572';
	useEffect(() => {
		fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}`)
			.then((response) => {
				return response.json();
			})
			.then((list) => {
				dispacht({
					type: 'SET_RECIPE_LIST',
					payload: list.results,
				});
				//setRecipeList(data.results);
				console.log(list.results.length);
			})
			.catch(() => {
				console.log('hubo un Error');
			});
	}, [dispacht]);
	return (
		<RecipeListstyled>
			{recipeList.map((recipe) => {
				return (
					<Recipe
						imagen={recipe.image}
						name={recipe.title}
						tipodieta='Intenso'
					/>
				);
			})}
		</RecipeListstyled>
	);
}

export default RecipeList;
