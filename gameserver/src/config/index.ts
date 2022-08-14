import certs from "./certs";
import * as dotenv from "dotenv";

dotenv.config();
const initialPort = parseInt(process.env.PORT || "3000");

const ports = {
    http:initialPort,
    https:initialPort+1
};

const postgres = process.env.POSTGRES;

export { certs, ports, postgres };