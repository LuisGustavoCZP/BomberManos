import { Server, Socket } from 'socket.io';
import Listener from "../server";

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