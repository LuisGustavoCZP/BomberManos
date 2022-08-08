const postgres = require("./postgres");

async function selectUser (login)
{
    const resp = await postgres.query('SELECT * FROM users WHERE login=$1', [login]);
    if(resp.rows.length > 0)
    {
        return resp.rows[0];
    }
    return null;
}

module.exports = {selectUser};