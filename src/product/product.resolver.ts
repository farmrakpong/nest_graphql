
import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './models/peoduct.model';

@Resolver('Product')
export class ProductResolver {
    @Query(returns => [Product])
    getProduct(): Product[] {
        const res:Product[] = [{
            id: "500",
            name: 'produckOne',
            asdasd: ""
        },
        {
            id: "500",
            name: 'ProductTwo',
            asdasd: "a"
        }]
        return res
    }
}
