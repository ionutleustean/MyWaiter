


export class ProductsModel {
    public Name:string = "";
    public ShortDescription:string= "";
    public Description:string= "";
    public Image:any = null;
    public Rating:string = "";
    public Price:string = "";
    public Category:string = "";
    public RestaurantId:string = "";
}

export class EditProductModel extends ProductsModel {
    public id:string = "";
}

