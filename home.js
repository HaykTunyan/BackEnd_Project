// 


export default function too() {
    console.log("  yay ")
}

import path from "path";
import fs from "fs"
import { fileURLToPath } from "url";

const currentDir = path.resolve();

const pathFull = path.join(currentDir, "package.json")
const newFile = path.join(currentDir,  "index.txt");

const parsPath =  path.parse(pathFull);


fs.readFile(pathFull, "utf8", function(error, text) {
    console.log(" text ", text )
})

fs.promises.writeFile(newFile, "new text file")