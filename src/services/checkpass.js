const { check } = require("../utils/bcrypto");

async function passwordFailed (userid)
{

}

async function check (user)
{
    if(check(password, user.password))
    {
        return true;
    }
    await passwordFailed(user.id);
    return false;
}

module.exports = check;