// Global Index.

import { createServer } from "http";
import fs from "fs";
import path from "path";


const server = createServer( (req, res)  => {
    res.writeHead( 200, {"Content-Type": "text/html" } )
    // res.end("Send Data");
    if(req.url === "/one") {
        res.end(JSON.stringify({
            name: "Node"
        }))



    } else {
        // res.end(" only  Node  Only ")

        fs.createReadStream( path.resolve("public/index.html")).pipe(res)
    }
   
} );

server.listen(3001)
