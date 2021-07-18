// must be the same names as in the API
class ProductModel {
	public id:number;
    public name:string;
    public price:number;
    public stock:number;
    public imageName:string;
    public image: FileList; // Image to send to the backend

}

export default ProductModel;
