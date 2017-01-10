const authResponse = auth0js.parseHash(window.location.hash, function (err, response) {
    parent.postMessage(err || response, 'http://localhost:3000');
});
