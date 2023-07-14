import { ConfigData } from "./dto/config.interface";

export const DEFAULT_CONFIG:ConfigData  = {
    env:'',
    port:5432,
    db:undefined,
    loglevel:'info'
}