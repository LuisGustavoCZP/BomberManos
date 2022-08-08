const bcrypt = require("bcrypt");
const saltRounds = 10;
const salts = bcrypt.genSaltSync(saltRounds);

async function generate (data) 
{
    return bcrypt.hash(data, salts);
}

async function check (data, hash)
{
    return bcrypt.compare(data, hash)
}

module.exports = {generate, check}