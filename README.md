# myWrap

A very simple mysql wrapper w/over-ridable defaults

# Install

```
npm i --save https://github.com/xpollen8/mywrap
```

# Usage

```
const myWrap = require('mywrap');

const db = new myWrap({
    host: '...',                     // default: 'localhost'
    user: '...',                     // default: 'root'
    password: '...',                 // default: ''
    database: '...',                 // default: ''
});

await db.start();
const [ rows, columns ] = await db.query("select ....");
await db.finish();
```
