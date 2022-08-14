import { Session } from '../models';
import { Socket } from 'socket.io';
import { GameMatch, gameData } from '../services/game/';

export default async function playerStarted (session : Session, playerId : string, socket : Socket)
{
    console.log(`Preparado: ${playerId}`);

    const gameMatch = await gameData.byUser(session.user) as GameMatch;
    const playerIndex = gameMatch.players.findIndex((player : any) => player.ID == playerId);
    
    socket.emit('game-ready' as any);

    socket.on('player-move', async (point)=>
    {
        //const player = gameMatch.players[playerIndex];
        const x = Math.floor(point.x*gameMatch.map.width);
        const y = Math.floor(point.y*gameMatch.map.height);
        await gameMatch.orderGoTo(playerIndex, {x, y})
        //gameMatch.update();
    });
}