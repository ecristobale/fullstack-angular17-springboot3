import { createReducer, on } from "@ngrx/store";
import { CartItem } from "../models/cartItem";
import { add, remove, total } from "./items.actions";

export interface ItemsState {
    items: CartItem[],
    total: number
}

export const initialState: ItemsState = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    total: 0
}
export const itemsReducer = createReducer(
    initialState,
    on(add, (state, {product})=> {
        console.log('Event productEventEmitter executed, product.name: ' + product.name);
        // const hasItem = this.items.find(item => {
        //   return item.product.id === product.id;
        // });
        const hasItem = state.items.find((item: CartItem) => item.product.id === product.id);
        if(hasItem) {
            return {
                items: state.items.map((item: CartItem) => {
                    if (item.product.id === product.id) {
                        return {
                            ... item, 
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                }),
                total: state.total
            };
        } else {
            return {
                items: [... state.items, {product: {... product}, quantity: 1 }],
                total: state.total
            };
        }
    }),
    on(remove, (state, {productId}) => {
        console.log('Event idProductEventEmitter executed, productId: ' + productId);
        const hasItem = state.items.find(item => item.product.id === productId && item.quantity > 1);
                  
        if(hasItem) {
            return {
                items: state.items.map(item => {
                    if (item.product.id === productId && item.quantity > 1) {
                    return {
                        ... item, 
                        quantity: item.quantity - 1
                    };
                    }
                    return item;
                }),
                total: state.total
            }
        } else {
         return {
            items: state.items.filter(item => item.product.id !== productId),
            total: state.total
         }
        }
    }),
    on(total, state => {
        return {
            items: state.items,
            total: state.items.reduce((accumulator, item) => accumulator + (item.quantity * item.product.price), 0)
        }
    })
)