import { Field, InputType } from "@nestjs/graphql";


@InputType('InputProduct')
export class InputProduct {

    @Field(type => String ,{ nullable: true})
    name?:string
    
    @Field(type => String, { nullable: true })
    deatail: string
  
    @Field(type => String, { nullable: true })
    dateCreate?: string
}