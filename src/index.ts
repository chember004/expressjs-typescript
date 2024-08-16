import { createApp } from "./createApp";

const app = createApp();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

/**
 * npm i express
 * npm i -D typescript
 * npm i -D @types/express
 * npx tsc =>> typscript compiler
 * npx tsc --init => create new tsconfig.json
 *  SET the Type Checking inside of tsconfig.json
 *  set rootDir: "./src" => set up root directory
 *  set outDir: "./dist" => set up build directory
 * "strict": true => Enable all strict type-checking options. ,
 * "noImplicitAny": true => Enable error reporting for expressions and declarations with an implied 'any' type.,
 * "strictNullChecks": true => When type checking, take into account 'null' and 'undefined'. ,
 * "strictFunctionTypes": true => When assigning functions, check to ensure parameters and the return values are subtype-compatible. ,
 * npm tsc --build => to build index.js type file
 * npm i -D ts-node => It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node. js without precompiling.
 * npm i -D jest
 * npm i -D ts-jest @types/jest =>
 * set configuration file for ts-jest / jest
 * npx ts-jest config:init
 *
 */
