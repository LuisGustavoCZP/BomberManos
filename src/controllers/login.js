const passCheck = require("../services/checkpass");
const {createSession} = require("../services/session");
const {selectUser} = require("../clients/postgres/users");
const { responseSucess, responseError } = require("../utils/response");

function login (req, res)
{
    const {login, password} = req.body;
    const user = await selectUser(login);
    if(user)
    {
        const respPassCheck = await passCheck(user);
        if(respPassCheck) 
        {
            const session = await createSession(user.id);
            res.cookie("token", session.id);
            responseSucess(res, null);
        }
        else responseError(["user: wrong password"]);
        return;
    }
    responseError(["user: not found"]);
}

module.exports = login;