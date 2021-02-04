## First Istall 
git clone https://github.com/farmrakpong/nest_graphql.git

## Running the app
$ npm run start:dev

# RUN PROT
http://localhost:3000/graphql

                              -------------------
                              |                 |
                              |  product.module |
                              |                 |
                              |                 |
                              -------------------
                                     |
                                     |
                                     |
                              -------------------
                              |                 |
                              | product.resolver|
                              |                 |
                              |                 |                                 _ _ _ _ _ _ _ _ _ _
                              -------------------                               |                     |
                                   |                                            |        ( Model )    |
                                   |                                        - > |                     |
                                   |                                      -     |  product.model      |
                                   |                                    -       |                     |
                                   |                                  -         |                     |
                              -------------------     <--------------            _ _ _ _ _ _ _ _ _ _ _
                              |                 |
                              | product.service | 
                              |                 |    
                              |                 |    <------------------_           _ _ _ _ _ _ _ _ __  _ _ _
                              -------------------                        _         |                          |
                                                                           _       |         ( DTO )          |
                                                                              _    |                          |
                                                                                -> |     product.input        |
                                                                                   |                          |
                                                                                   |                          |
                                                                                   |                          |
                                                                                   |                          |
                                                                                    _ _ _ _ _ _ _ _ _ _ _ _ _ _
