import React, { useState } from 'react';
import Sqaure from './Sqaure';

const Board = () => {
	const [state, setState] = useState(Array(9).fill(null));
	const [isXTurn, setXTurn] = useState(true);

	const checkWinner = () => {
		const winnerLogic = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let logic of winnerLogic) {
			const [a, b, c] = logic;
			if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
				return state[a];
			}
		}
		return false;
	};

	const isWinner = checkWinner();

	const handleClick = index => {
		if (state[index] !== null) {
			return;
		}
		const copyState = [...state];
		copyState[index] = isXTurn ? 'X' : 'O';
		setState(copyState);
		setXTurn(!isXTurn);
	};
	const handleReset = () => {
		setState(Array(9).fill(null));
	};

	return (
		<div className='board-container'>
			{isWinner ? (
				<>
					<div
						style={{
							fontSize: '56px',
							padding: '200px 20px',
							margin: 'auto',
							width: '100%',
						}}
					>
						{isWinner} won the game 🥳🎉
						<button
							onClick={handleReset}
							style={{ color: 'white', background: 'green', fontSize: '30px' }}
						>
							Play Again
						</button>
					</div>
				</>
			) : (
				<>
					<h1>Player{isXTurn ? ' X' : ' O'} please move</h1>
					<div className='board-row'>
						<Sqaure onClick={() => handleClick(0)} value={state[0]} />
						<Sqaure onClick={() => handleClick(1)} value={state[1]} />
						<Sqaure onClick={() => handleClick(2)} value={state[2]} />
					</div>
					<div className='board-row'>
						<Sqaure onClick={() => handleClick(3)} value={state[3]} />
						<Sqaure onClick={() => handleClick(4)} value={state[4]} />
						<Sqaure onClick={() => handleClick(5)} value={state[5]} />
					</div>
					<div className='board-row'>
						<Sqaure onClick={() => handleClick(6)} value={state[6]} />
						<Sqaure onClick={() => handleClick(7)} value={state[7]} />
						<Sqaure onClick={() => handleClick(8)} value={state[8]} />
					</div>
				</>
			)}
		</div>
	);
};

export default Board;
