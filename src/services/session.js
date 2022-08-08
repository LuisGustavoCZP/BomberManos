const { redis } = require("../clients/redis/redis");
const uuid = require("../utils/uuid");

async function createSession (userid)
{
    const session = {
        id:uuid(),
        userid:userid
    }
    redis.hset(session.id, session, );
}

module.exports = {createSession}