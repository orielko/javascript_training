# Package for errors notifications
## Install:
npm i notyf

## Add in public/index.html
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
```
## Better to create a singleton for the Nofitication 
```javascript
import { Notyf } from "notyf";

class Notify{
    private notification= new Notyf({duration:4000, position:{x:"center",y:"top"}});

    public success(message:string):void{
        this.notification.success(message);
    }
    public error(message:any):void{
        this.notification.error(message);
    }
}
const notify=new Notify();
export default notify;
```

## To use:
```javascript
notify.success("Added product");
notify.error(err.message);

```

# Redux (State managment/ Store)
## Why:
If we want to data to be shared and linked between components
## Install:
npm i redux
## We have 3 actions in Redux:
1. getState - get shared data
2. dispatch - change shared data
3. subscribe - listening to changes

## Redux template (State):
```javascript
import ProductModel from "../Models/ProductModel";

//State data:
export class ProductsState{
    public products:ProductModel[]=[];
    public top5products:ProductModel[];
    public mostSellingProduct:ProductModel;
}

//Action types:
export enum ProductsActionType {
    AddProduct="AddProduct",
    UpdateProduct="UpdateProduct",
    DeleteProduct="DeleteProduct",
    GetProducts="GetProducts",
    GetProduct="GetProduct"
}

//Action:
export interface ProductsAction{
    type: ProductsActionType; //the "action types" type
    payload: ProductModel | number | ProductModel[] //the data that we are sending to redux store (by the action), sometimes "any" is used here
}

//Actions creators: (optional)
export function addProductAction(productToAdd:ProductModel):ProductsAction{
    return {type:ProductsActionType.AddProduct,payload:productToAdd};
}
export function updateProductAction(productToUpdate:ProductModel):ProductsAction{
    return {type:ProductsActionType.UpdateProduct,payload:productToUpdate};
}
export function deleteProductAction(productToRemove:number):ProductsAction{
    return {type:ProductsActionType.DeleteProduct,payload:productToRemove};
}
export function getProductAction(fetchedProduct:ProductModel):ProductsAction{
    return {type:ProductsActionType.GetProduct,payload:fetchedProduct};
}
export function getProductsAction(fetchedProducts:ProductModel[]):ProductsAction{
    return {type:ProductsActionType.GetProducts,payload:fetchedProducts};
}

//Reducer: (will be called by redux, when we call the "dispatch")
export function productsReducer(currentState:ProductsState=new ProductsState(), action:ProductsAction):ProductsState{
    //spread operator to duplicate the state
    const newState={...currentState};
    switch(action.type){
        case ProductsActionType.AddProduct:
            newState.products.push(action.payload as ProductModel);
            break;
        case ProductsActionType.DeleteProduct:
            //not implemented
            break;
        case ProductsActionType.GetProduct:
            //not implemented
            break;
        case ProductsActionType.GetProducts:
            newState.products=action.payload as ProductModel[];
            break;
        case ProductsActionType.UpdateProduct:
            //not implemented
            break;
    }
    return newState;
}

```
## Redux template (Store):
```javascript
import { combineReducers, createStore } from "redux";
import { productsReducer } from "./ProductsState";

const reducers = combineReducers({
    // renaming the reducer to make more sense at the usage
    productsState: productsReducer
    // put all the reducers in here
});

const store = createStore(reducers);
export default store;
```

## last part is the usage:
```javascript
if(store.getState().productsState.products.length===0){
    // const response= await axios.get<ProductModel[]>("http://localhost:3030/api/products/delayed");
    const response= await axios.get<ProductModel[]>(config.urls.products);
    store.dispatch(getProductsAction(response.data))
}
this.setState({products:store.getState().productsState.products});
```

```javascript
const product=store.getState().productsState.products.find(p=>p.id===id);
```

```javascript
const response= await axios.post<ProductModel>(config.urls.products,formData);
store.dispatch(addProductAction(response.data));
```




