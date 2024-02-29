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