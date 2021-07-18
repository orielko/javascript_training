import { Config } from "@testing-library/react";

abstract class BaseConfig {
    //general config properties
    public urls = { products: "", productsImages: "", register: "", login: "" };

    public constructor(baseUrl: string) {
        this.urls = {
            products: baseUrl + "products/",
            productsImages: baseUrl + "products/images/",
            register: baseUrl + "auth/register/",
            login: baseUrl + "auth/login/"


        }
    }
}

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

const config = process.env.NODE_ENV === "development" ? new DevelopementConfig() : new ProductionConfig();

export default config;
