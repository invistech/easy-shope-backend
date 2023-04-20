import { IsDefined, IsString } from "class-validator";
import { Product, Varient } from "./";

export class VarientsOfProducts {
    @IsDefined()
    product!: Product;

    @IsDefined()
    @IsString()
    productId!: string;

    @IsDefined()
    varient!: Varient;

    @IsDefined()
    @IsString()
    varientId!: string;
}
