
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InputProduct } from './dto/product.input';
import { Product } from './models/product.model';
import { ProductService } from './service/product.service';

@Resolver('Product')
export class ProductResolver {
    constructor(private productService: ProductService){}
    @Query(returns => [Product])
    getProduct(): Product[] {
        return this.productService.getProduct()
    }

    @Mutation(returns => Product)
    createProduct(@Args('input') input:InputProduct):Product{
        const res:Product = {
                id :"50",
                ...input // จะใช้แบบนี้ได้พวก Field input กับ model ต้องเหมือนกัน 
        }
        console.log(input);
        return res
        
    }
}
