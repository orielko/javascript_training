# wraper for redux for more funtionality for functional component
## Install:
npm i react-redux @types/react-redux

## Surround the layout with "Provider" tag, this way all the funcitonal component will know the store
```javascript
import { Provider } from "react-redux";

import store from "../../../Redux/Store";
function Layout():JSX.Element{
    return (
        <Provider store={store}>
            <div className="Layout">
                <header><Header/></header>
                <aside><Menu/></aside>
                <main><Routing/></main>
                <footer><Footer/></footer>
            </div>
        </Provider>
    );
}
```

## Usage in the functional component:
```javascript
import { useSelector } from "react-redux";
function TotalProductsFunctionalComponent(): JSX.Element {

    const count=useSelector((state:any)=>{
        return state.productsState.products.length;
    })
    return (
        <div className="TotalProductsFunctionalComponent">
			{count>0 && <span>Total products: {count}</span>}
        </div>
    );
}
```

# Redux (subscription)
## Why:
We want to listen to changes on the store state

## code example
```javascript
private unsubscribeMe:Unsubscribe;
componentDidMount():void{
    this.unsubscribeMe=store.subscribe(()=>{this.setState({count:store.getState().productsState.products.length})});
}
public render(): JSX.Element {
        return (
            <div className="TotalProducts">
				{this.state && <span>Total products: {this.state?.count}</span>}
            </div>
        );
    }
componentWillUnmount(){
    this.unsubscribeMe();
}
```

# JSON Web Token (JWT)

## First we should configure a model for the JWT
```javascript
class UserModel {
	public id:number;
    public firstName:string;
    public lastName:string;
    public password:string;
    public token:string;
}

export default UserModel;
```

## Afterwards we should configure the redux part:
```javascript
import UserModel from "../Models/UserModel";

export class AuthState{
    public user:UserModel=null;
}

export enum AuthActionType{
    Register="Register",
    Login="Login",
    Logout="Logout"
}

export interface AuthAction{
    type:AuthActionType;
    payload?:any; //optional: on logout we don't need payload
}

export function registerAction(user:UserModel):AuthAction{
    return {type:AuthActionType.Register,payload:user};
}
export function login(user:UserModel):AuthAction{
    return {type:AuthActionType.Login,payload:user};
}
export function logout():AuthAction{
    return {type:AuthActionType.Logout};
}

export function authReducer(currentState:AuthState=new AuthState(),action:AuthAction):AuthState{
    const newState={...currentState};
    switch(action.type){
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.user=action.payload;
            break; 
        case AuthActionType.Logout:
            newState.user=null;
            break; 
    }
    return newState;
}
```
## Afterwards we want to define the store (Store.ts)
```javascript
const reducers = combineReducers({
    // renaming the reducer to make more sense at the usage
    productsState: productsReducer,
    authState:authReducer
    // put all the reducers in here
});
```

## Define registration
```javascript

```
