abstract class Config {
    public urls = {
        products: "",
        productImages: "",
        productsDelayed: "",
        employees: "",
        employeesImages: "",
    }

    public constructor(baseUrl: string) {
        this.urls = {
            products: baseUrl + "products/",
            productImages: baseUrl + "products/images/",
            productsDelayed: baseUrl + "products/delayed/",
            employees: baseUrl + "employees /",
            employeesImages: baseUrl + "employees /images/"

        };
    }
}

class DevelopmentConfig extends Config {
    public constructor() {
        super("http://localhost:3030/api/");
    }
}

class ProductionConfig extends Config {
    public constructor() {
        super("https://www.northwind.com/api/");
    }
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
