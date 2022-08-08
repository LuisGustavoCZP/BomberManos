function responseError (res, messages, status=200)
{
    res.status(status).json({data:null, messages});
}

function responseSucess (res, data, status=200)
{
    res.status(status).json({data, messages:[]});
}

module.exports = {responseSucess, responseError}