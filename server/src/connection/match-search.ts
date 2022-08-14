import { MatchService, UserService } from '../services/';
import { Session } from '../models';
import { Socket } from 'socket.io';

export default async function matchSearch (session : Session, playerId : string, socket : Socket, type: string)
{
    //console.log("Match Search");
    const responseMatchSetup = await MatchService.create(session.user, type);
    if(responseMatchSetup.messages.length > 0)
    {
        console.log("Search Disconected", session.user);
        socket.disconnect(true);
        return;
    }

    const matchSetup = responseMatchSetup.data;
    console.log(`> Player connected on Server with id: ${session.user} and match: ${matchSetup.id}`);

    const user = await UserService.get(session.user);

    const matchPlayer = {
        index: -1,
        owner: user.data.username,
        socket: {id:socket.id, commander:(key: string, data: any) => {socket.emit(key, data)}},
        setup: null
    };
    matchSetup.subscribe(matchPlayer);

    socket.on('disconnect', async ()=>
    {
        let n = await matchSetup.unsubscribe(matchPlayer);
        console.log(`> Player disconnected on Server with id: ${session.user} at index:${n}`);
    });
}