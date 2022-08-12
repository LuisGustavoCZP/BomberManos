/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { IGameProps } from '../../models';
import * as SocketIO from 'socket.io-client';
import { Game } from '../../components/Game';

function GameScreen (props : IGameProps)
{
	const {socket, user} = props;
	let gameData = props.data;
	const gameRef = React.createRef<HTMLDivElement>();
	//const gameRef = React.createRef<HTMLCanvasElement>();

	useEffect(()=>
	{
		const game = new Game(gameRef.current!, 512, 512, 'absolute h-full', props);
	}, []);


	return (
		<div className='flex relative justify-center items-center h-full w-full' ref={gameRef}>
			{/* <canvas id="map" className='absolute h-full' width={512} height={512}></canvas> */}
			{/* <canvas id="game" ref={gameRef} className='absolute h-full' width={512} height={512}></canvas> */}
		</div>
	);
}

export default GameScreen;