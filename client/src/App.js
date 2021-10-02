import React from 'react';
import './App.css';
import RecipeList from './recipe-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const inicialState = {
	recipeList: [],
};

function reducer(state, action) {
	return state;
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
