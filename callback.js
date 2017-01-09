const auth0js = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
    scope: 'openid profile',
    responseType: 'token',
    redirectUri: 'http://localhost:3000'
});

const authResponse = auth0js.parseHash(window.location.hash, function (err, response) {
    parent.postMessage(err || response, 'http://localhost:3000');
});
