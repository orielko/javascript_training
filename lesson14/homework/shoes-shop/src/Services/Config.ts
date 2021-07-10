
abstract class BaseConfig{
//general config properties
    public urls={ employees:"" , employeeImage:""};

    public constructor(baseUrl:string){
        this.urls={
            employees: baseUrl+"employees/",
            employeeImage: baseUrl+"employees/images/"

        }
    }
}

class DevelopementConfig extends BaseConfig{
    //dev config properties
    public constructor(){
        super("http://localhost:3030/api/");
    }
}
class ProductionConfig extends BaseConfig{
    //prod config properties
    public constructor(){
        super("http://localhost:3030/api/");
    }
}

const config=process.env.NODE_ENV==="development"?new DevelopementConfig():new ProductionConfig();

export default config;
