import { Module } from '@nestjs/common';
import { ResolverResolver } from './resolver/resolver.resolver';
import { ProductService } from './service/product.service';
import { ProductResolver } from './product.resolver';

@Module({
  providers: [ResolverResolver, ProductService, ProductResolver]
})
export class ProductModule {}
