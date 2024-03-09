import { gql } from "@apollo/client";

export const PRODUCTS = gql`
    query getAll{
        products {
            _id
            name
            unity
        }
    }
`

export const USER = gql`
    query getUser{
        user {
            name
            email
            address
            orders {
                _id
                totalPrice
                createdAt
                products {
                    _id
                    product {
                        name
                        unity
                    }
                    quantity
                }
            }
        }
    }
`