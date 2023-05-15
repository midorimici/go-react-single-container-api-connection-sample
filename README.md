# Connecting two servers in a single Docker container example

In this sample app, Go API and React app are connected inside a single container with one exposed port accessible from outside.

Notice `EXPOSE 3000 ${API_PORT}` in `Dockerfile` (both are needed) and `client/setupProxy.js`.

