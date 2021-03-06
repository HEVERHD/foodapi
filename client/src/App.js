import React from 'react';
import './App.css';
import RecipeList from './recipe-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const inicialState = {
	recipeList: [],
};

function reducer(state, action) {
	console.log(action);
	switch (action.type) {
		case 'SET_RECIPE_LIST': {
			console.log('voy actualizar la lista de recetas');
			return { ...state, recipeList: action.payload };
		}
		default: {
			return state;
		}
	}
}
const store = createStore(reducer, inicialState);

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<RecipeList />
			</div>
		</Provider>
	);
}

export default App;
