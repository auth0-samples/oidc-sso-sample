# OIDC Single Sign-on Sample

## Prerequisites

1. Go to https://manage.auth0.com/#/clients and create a single-page application client.
2. Add `http://localhost:5000` as allowed callback URLs and as a Web Origin.
3. Enter your Auth0 domain and client ID in the [`auth0-variables.js`](/auth0-variables.js) file.

## Running the sample

To start the sample, start a web server in the root of this repository at port 5000, or just run:

```sh
npm install -g serve
serve
```

and then browse to [http://localhost:5000](http://localhost:5000).

## How this sample works

We are checking two things in local storage to detect if a user is logged in or not:

* `accessToken`: the Auth0 access token to access our desired API, which in this case is `/userinfo`
* `expirationDate`: the expiration date of this token, calculated using the `expires_in` response parameter after a successful authentication

If there is no valid access token present in local storage, the user is not logged in to our application, but they might have logged in via SSO to another application.

We can detect if this is the case by calling the `checkSession` method of auth0.js, which will attempt to silently authenticate the user inside an iframe.

Silent authentication works in the same way as regular authentication (i.e. redirects the user to `/authorize`), but with some differences (all of this is done by the checkSession function):

* A `prompt=none` parameter is added to the redirect to `/authorize`.
This causes Auth0 to return an error in case the user is not logged in via SSO instead of displaying a login page.
* The redirect happens inside an iframe to preserve our application's state.

Two things can happen after a silent authentication request:

* The user did not have an active SSO session, so Auth0 calls back with an error (`error=login_required`)
* The user did have an active SSO session, so Auth0 calls back with an access token (`access_token=...&expires_in=...`)

In this sample we are immediately redirecting the user to the login page by using the `authorize` method of auth0.js if silent authentication failed, or storing the token and its expiration date in local storage if it succeeded.
