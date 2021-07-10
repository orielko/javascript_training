# For Routing install first:

 ### `npm i --save-dev @types/react-router-dom`

## Surround the base layout element with BrowserRouter, for example:

```javascript
import { BrowserRouter } from 'react-router-dom';
...
<BrowserRouter>
        <Layout />
</BrowserRouter>
``` 

## Afterwards create a Routing component to hold all the links, for example:
```javascript
import { Route, Switch } from "react-router-dom";
...
function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Main} exact/>
                <Route path="/products" component={Products} exact/>
                <Route path="/sucess_stories" component={SucessStories} exact/>
                <Route path="/about" component={About} exact/>
            </Switch>
        </div>
    );
}
```

## Put the Routing in the layout, where we want to component to be displayed, for example:
```javascript
function Main(): JSX.Element {
    return (
        <div className="Main">
          <Routing/>
        </div>
    );
}
```

## Use NavLinks to change the internal routes, for example:
```javascript
import { NavLink } from "react-router-dom";
...
<NavLink to="/home" >Home</NavLink>
<NavLink to="/products" >Products</NavLink>
<NavLink to="/success_stories" >Success Stories</NavLink>
<NavLink to="/about" >Who are we?</NavLink>  
```