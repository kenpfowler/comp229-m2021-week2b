"use strict";
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Nodemon restarts the server automatically, cool!  Doesn't need start script in the package.json either."
  );
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//# sourceMappingURL=index.js.map
//ts for us to write code with fewer errors.  JS is to be run by node
//we configure ts by creating a tsconfig.json file
//we use the command tsc to transpile from our index.ts file to our index.js file
//we can use ctrl+shift+b in order to watch for changes in our index.ts file and transpile them to JS
//We can remove the errors from our TS file by using proper ES6 syntax for the require/import statement
