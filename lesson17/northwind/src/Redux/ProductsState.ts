import ProductModel from "../Models/ProductModel";

//State data:
export class ProductsState{
    public products:ProductModel[]=[];
    // public top5products:ProductModel[];
    // public mostSellingProduct:ProductModel;
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
//On dispatch Redux calls all the reducers, therefore we want to make sure that the action.type is unique
export function productsReducer(currentState:ProductsState=new ProductsState(), action:ProductsAction):ProductsState{
    //spread operator to duplicate the state
    const newState={...currentState};
    switch(action.type){
        case ProductsActionType.AddProduct:
            newState.products.push(action.payload as ProductModel);
            break;
        case ProductsActionType.DeleteProduct:
            newState.products=currentState.products.filter((x)=>x.id!==(action.payload as number));
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
