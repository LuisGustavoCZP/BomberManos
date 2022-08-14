import { Server, Socket } from 'socket.io';
import database from '../database';
import { Session } from '../models';
import Listener from "../server";
import { MatchService } from '../services/';
import matchConfirm from './match-confirm';
import matchSearch from './match-search';
import matchUnconfirm from './match-unconfirm';
import playerStarted from './player-started';

class Connections 
{
    public listeners;
    public http : any;
    public https : any;

    constructor (listener : Listener)
    {
        this.listeners = {
            http:listener.httpServer, 
            https:listener.httpsServer
        };
        this.http = new Server(listener.httpServer);
        this.https = new Server(listener.httpsServer);

        this.onconnect ();
    }

    public on (event:string, action : void | any)
    {
        this.http.on(event, action);
        this.https.on(event, action);
    }

    public onconnect ()
    {
        this.on('connection', async (socket: Socket) =>
        {
            const playerId = socket.id;
            console.log("Novo ID", playerId);
            const session = await database.get("sessions", socket.handshake.auth["token"]) as Session;
            if(!session)
            {
                console.log("Connection Disconected", playerId);
                socket.disconnect(true);
                return;
            }

            const responseMatch = await MatchService.search(session.user);
            
            socket.emit('check-playing', responseMatch.data?.id);

            socket.on('match-search', (type: string) => { matchSearch(session, playerId, socket, type) });
            
            socket.on('match-confirm', () => { matchConfirm(session, playerId, socket) });

            socket.on('match-unconfirm', () => { matchUnconfirm(session, playerId, socket) });
            
            socket.on('player-started', () => { playerStarted(session, playerId, socket) });
            
        });
    }

    public onclose (action : any | unknown)
    {
        this.listeners.http.on('close', () =>
        {
            console.log(`Closing server`);
        });
        this.listeners.https.on('close', () =>
        {
            console.log(`Closing server`);
        });
    }
}

export default Connections;