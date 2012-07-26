# Redact

An experimental app built on top of c9 technology using npm, and jamjs to manage packages.

## Running

First install the node dependencies.  Install the latest nodejs from nodejs.org.  Then in the current folder to `npm install` to install all npm dependencies.

Then install the browser dependencies.  Go to the "public" folder and type `jam install smith events`.

Go back to the root folder and run the server with `node server.js`.

Point your browser to <http://localhost:8080/> and look in the web console.  The browser-side components require binary websockets and other html5 APIs.  Tested to work in latest Chrome.