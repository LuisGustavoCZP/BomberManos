import certs from "./certs";
import matchConfig from "./match";
import * as dotenv from "dotenv";

dotenv.config();
const initialPort = parseInt(process.env.PORT || "3000");

const ports = {
    http:initialPort,
    https:initialPort+1
};

const postgres = process.env.POSTGRES;

const security = {
    saltRounds:10,
    secret:"jacareperneta"
};

const sessionConfig = {
    get expiration () : number { return sessionConfig.expirationTime * sessionConfig.minute },
    expirationTime: .5,
    minute: 60*1000
};

const validatorConfig = {
    password:{min:6, max:6},
    username:{min:4, max:8}
};



export { certs, ports, security, sessionConfig, validatorConfig, postgres, matchConfig };