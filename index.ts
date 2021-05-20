//boilerplate code can be found at nodejs.org > docs > guides
import http from "http";
//node by itself is "bare bones. Just a JS runtime. Therefore, we need to require modules to build functionality onto a node app"
//http is built into node, so we don't have to download it with npm, but we do need to require it to access the code
//all node servers will use this object in some way.

const hostname: string = "127.0.0.1";
const port: number = 3000;

//This method instantiates an object of type HTTP.
//Takes a request object and response object as an args
const server: http.Server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Nodemon restarts the server automatically, cool!  Doesn't need start script in the package.json either."
  );
});
//NOTE: once we configure the server object and start it we cannot reconfigure it
//without restarting the server because the object has already been created and is immutable.
//A work around for this is to use nodemon which will restart automatically when changes are made.

//the listen method is a lot like an event listener that listens for connections
//if we make a request using our browser to the provided host and port,
//the server we created will provide the response we defined.

server.listen(port, hostname, () => {
  //notice that this console.log will appear in the termial and not in the browser
  console.log(`Server running at http://${hostname}:${port}/`);
});

//We typed yarn add @types/node --dev to add a dev dependency to our project that give us
//a dev dependency is somthing helpful for developers, but not necessary for the node application to run
//the dependecny provides us with type definitions which give us better code hinting while developing.
//EX: we could write a non-functionnig statement like server.hhtplock; and it wouldn't get flagged as an error unitl runtime
// NOTE: if you use typescript it must be transpiled into JS before node or the browser can interpert it.

//you can see the dependecies in the newly created node_modules folder
//Also note that a yarn lock file is created. You can only use npm or yarn but not both to manage your packages.
