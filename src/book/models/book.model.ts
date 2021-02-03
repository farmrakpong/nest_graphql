import { Field, Float, ID, ObjectType,  } from '@nestjs/graphql'

@ObjectType()
export class Book {
  @Field(type => ID)
  id: string

  @Field(type => String, { nullable: true })
  name?: string

  @Field(type => String, { nullable: true })
  description?: string

  @Field(type => Float, { nullable: true })
  price?: number

  @Field(type => Float, { nullable: true })
  supprice?: number

  @Field(type => Float , { nullable: true })
  sumprice?: number

  @Field(type => [String], { nullable: true })
  writer?: string[]
}