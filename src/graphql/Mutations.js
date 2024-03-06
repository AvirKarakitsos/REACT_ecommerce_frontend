import { gql } from "@apollo/client";

export const ADD_PRODUCTS = gql`
    mutation postProducts($order: [AddOrderInput!]!) {
        validOrder(order: $order) {
            url
        }
    }
`