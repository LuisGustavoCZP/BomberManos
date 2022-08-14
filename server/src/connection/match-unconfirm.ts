import { MatchService } from '../services/';
import { Session } from '../models';
import { Socket } from 'socket.io';

export default async function matchUnconfirm (session : Session, playerId : string, socket : Socket)
{
    //console.log("User", session.user);
    const responseMatch = await MatchService.search(session.user);
    if(!responseMatch.data)
    {
        console.log("Disconected", session.user);
        socket.disconnect(true);
        return;
    }

    const matchSetup = responseMatch.data;
    //console.log("Match", matchSetup);
    
    await matchSetup.unconfirm(playerId);
}