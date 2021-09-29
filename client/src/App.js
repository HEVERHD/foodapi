import React from 'react';
import './App.css';
import Recipe from './recipe';

function App() {
	return (
		<div className='App'>
			<Recipe
				imgplato='https://www.clasificacionde.org/wp-content/uploads/2019/01/Tipos-de-Dieta.jpg'
				nombre='Frutales'
				tipodieta='medio'
			/>
		</div>
	);
}

export default App;
