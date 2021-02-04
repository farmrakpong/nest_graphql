import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType('Product')
export class Product{

    @Field(type => ID)
    id:string 

    @Field(type => String ,{ nullable: true})
    name?:string

    @Field(type => String ,{ nullable: true})
    deatail?:string

    @Field(type => String ,{ nullable: true})
    dateCreate?:string



}