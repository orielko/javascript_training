# redux debugger
## Install:
```shell
npm i redux-devtools-extension
```

## Change in the Config: (inside our project code: add isDevelopment variable)
```javascript
class DevelopementConfig extends BaseConfig {
    public readonly isDevelopment = true;
    //dev config properties
    public constructor() {
        super("http://localhost:3030/api/");
    }
}
class ProductionConfig extends BaseConfig {
    public readonly isDevelopment = false;
    //prod config properties
    public constructor() {
        super("http://localhost:3030/api/");
    }
}
```

## On the Store.ts file:
```javascript
const store = createStore(reducers, config.isDevelopment ? composeWithDevTools() : undefined);
```

# Upload the react web
## type:
```shell
npm run build
```
## for firebase website:
```shell
npm i -g firebase-tools
```
## firebase login:
```shell
firebase login
```
## firebase init:
```shell
firebase init
```
# choose with space (hosting for example)
# choose "build" for the directory (the compiled project)

## firebase deploy:
```shell
firebase deploy
```
## to deploy changes:
1. 
```shell
npm run build
```
2. 
```shell
firebase deploy
```

# CSS leakage handling
## Change the CSS file name:
### From:
Hours.css
### To:
Hours.module.css

## Import this way:
### From:
```javascript
import "./Hours.css";
```
### To:
```javascript
import css from "./Hours.module.css";
```
## And the usage:
```javascript
    <div className={css.Hours + " Box"}>
    <p className={css.Bright}>
```

# MATERIAL-UI Components
```shell
npm install @material-ui/core
```
## Usage: (example)
```javascript
<Typography variant="h3" className="Headline">Contact us</Typography>
<form>
    <TextField label="Name" variant="outlined"/>
    <TextField label="Email" variant="outlined" type="email"/>
    <TextField label="Message" variant="outlined" className="TextBox"/>
    <FormControlLabel label="I'm satisfied" control={<Checkbox/>}></FormControlLabel>
    <FormControlLabel label="Please spam me with Emails" control={<Checkbox/>}></FormControlLabel>
    <ButtonGroup variant="contained" fullWidth>
        <Button color="primary" type="submit">Send</Button>
        <Button color="secondary" type="reset">Clear</Button>
    </ButtonGroup>

</form>
```

# MATERIAL-UI Icons

```shell
 npm i @material-ui/icons
 ```