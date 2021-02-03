import { Injectable } from '@nestjs/common';
import { Book } from '../models/book.model';
@Injectable()
export class ServiceService {
    constructor(){}
    getBook():Book{
        const result: Book = {
            id: '1',
            name: 'BeforeSecond',
            price: 1.51,
            supprice: 1.50
          }
          result.sumprice = result.price + result.supprice
          return result;
    }

    creatBook(result:Book){
            console.log(result.name);
            return result
            
    }
}
