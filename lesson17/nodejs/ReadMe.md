# to run node: (app is the main file name)
```shell
node app
```

## By default in node.js each file has automatically IFFI (to disconnect it from the global object)
To use the functions and variables inside a module we need to export them:
```javascript
module.exports={
    something,
    printMessage,
    printMultipleMessage
}
```
Afterwards, we need to import it:
```javascript
const printer=require("./printer");
```
