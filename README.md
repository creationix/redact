# Redact

An experimental app built on top of c9 technology using npm, and jamjs to manage packages.

## Running The App

If you don't have [nodejs][] yet, go get it!

Then clone this project from github and install the libraries for node and the browser. Npm will chainload [jamjs] (`jam install`) for you.

```sh
git clone https://github.com/creationix/redact
cd redact
npm install
```

Now you're ready to start the server!

```sh
npm start
```

Open Chrome or another browser that supports the latest websockets and typed arrays.
Point the browser to your app at <http://localhost:8080/>.

[nodejs]: http://nodejs.org>
[jamjs]: http://jamjs.org/