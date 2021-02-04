import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

    getProduct():Product[]{
        const res:Product[] = [{
            id: "500",
            name: 'produckOne',
        },
        {
            id: "500",
            name: 'ProductTwo',
        }]
        return res
    }
}
