import express from 'express';
import cors from 'cors';

import Routes from "./router";
import Server from "./server";
import Connections from "./connection";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const corsOptions : cors.CorsOptions = {
    origin:["http://localhost:8000", "http://localhost:5173", "http://127.0.0.1:8000", "http://127.0.0.1:5173", "http://192.168.0.113:8000"],
    credentials:true,
}
app.use(cors(corsOptions));

const server = new Server(app);
const connections = new Connections(server);

app.use(Routes);

server.listen();