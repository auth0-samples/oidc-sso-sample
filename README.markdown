# OIDC Single Sign-on Sample

## Prerequisites

1. Go to https://manage.auth0.com/#/clients and create a single-page application client with OIDC Conformant mode enabled
2. Add `http://localhost:3000` and `http://localhost:3000/callback.html` as allowed callback URLs
3. Enter your Auth0 domain and client ID in the [`auth0-variables.js`](/auth0-variables.js) file.

## Running the sample

To start the sample, start a web server in the root of this repository at port 3000, or just run:

```sh
make
```

and then browse to http://localhost:3000.
