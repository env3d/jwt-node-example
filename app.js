
/**
 *
 * A simple example of using nodejs to verify google's id_token
 *
 */

const express = require('express');
const app = express();
const validateJwt = require('./validateJwt');

app.get('/verify', async (req, res) => {    
    // expects jwt in query param
    let jwt = req.query['jwt']

    // here we are making this synchronous
    result = await validateJwt(jwt);

    res.send(result);
});  

let server = app.listen(3000, () => {
    console.log('JWT Server ready', server.address().port);
});
