import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Book } from './models/book.model'
import { InputBook } from './dto/book.input'
import { ServiceService } from './service/service.service'

@Resolver('Book')
export class BookResolver {
    constructor(private serviceService: ServiceService){}

  @Query(returns => Book)
  getBook():Book {
    return this.serviceService.getBook();
  }

  @Mutation(returns => Book)
  createBook(@Args('input') input: InputBook): Book {
    const result: Book = {
      id: '2',
      ...input,
    }
    return this.serviceService.creatBook(result);
  }
}