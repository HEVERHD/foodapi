import React from 'react';
import styled from 'styled-components';

const RecipeStyled = styled.div`
	width: 264px; //medida max de mi contenedor
	text-align: left;
	border-radius: 5px;
	margin: 1em;
	overflow: hidden;
	box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
	img {
		width: 100%;
		height: 160px;
		object-fit: cover;
	}
	.detalles {
		padding: 1.5em;
	}
	h2 {
		margin: 0;
		margin-bottom: 1rem;
		font-size: 18px;
		font-weight: 700;
	}
	p {
		font-size: 0.9em;
		margin-bottom: 0.5rem;
	}
`;

function Recipe({ imagen, name, tipodieta }) {
	return (
		<RecipeStyled>
			<img src={imagen} alt='' />
			<div className='detalles'>
				<h2>{name}</h2>
				<p>
					<strong>tipodieta:</strong> {tipodieta}
				</p>
			</div>
		</RecipeStyled>
	);
}

export default Recipe;
