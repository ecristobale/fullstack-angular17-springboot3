import { Invoice } from "../models/invoice";

export const invoiceData: any = {

    id: 1,
    name: 'PC components',
    client: {
        name: 'John',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'Elm Street',
            number: 15
        }
    },
    company: {
        name: 'Ragnarock',
        fiscalNumber: 4627326,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 300,
            quantity: 1
        },
        {
            id: 2,
            product: 'Msoft Keyboard',
            price: 10,
            quantity: 3
        },
        {
            id: 3,
            product: 'Nokia Monitor',
            price: 150,
            quantity: 2
        }
    ]
}