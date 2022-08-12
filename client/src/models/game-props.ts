import * as SocketIO from 'socket.io-client';
import { IUser, ServerToClientEvents, ClientToServerEvents } from './';

export interface IGameProps 
{
	user: IUser
	socket: SocketIO.Socket<ServerToClientEvents, ClientToServerEvents>
	data: any
}