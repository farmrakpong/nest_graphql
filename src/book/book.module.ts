import { Module } from '@nestjs/common';
import { BookResolver } from './book.resolver';
import { ServiceService } from './service/service.service';

@Module({
  providers: [BookResolver, ServiceService]
})
export class BookModule {}
