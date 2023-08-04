import { AddressType, OrderListAction, OrderListActions } from "./actions"
import { produce } from 'immer';

export interface Coffee {
  id: string
  urlImg: string
  typeList: string[]
  name: string
  description: string
  price: number
  quantity: number
}

export interface Address {
  postalCode: string
  street: string
  number: string
  address2?: string
  district: string
  city: string
  state: string
}

export interface OrderSummary {
  address: Address;
  payment: string;
  time: string;
}

export interface OrderListState {
  coffees: Coffee[]
  numberOfCoffeeInCard: number
  address: Address
  subtotal: number
  shipping: number
  total: number
  orderSummary: OrderSummary

}

export function OrderListReducer(state: OrderListState, action: OrderListAction) {
  function getCoffeeCartCounter(coffees: Coffee[]): number {
    return coffees.reduce((prev, current) => (prev) + (current.quantity || 0), 0);
  }

  function sumCoffeeTotal(coffees: Coffee[]): number {
    return coffees.reduce((prev, current) => (prev) + (current.quantity || 0) * current.price, 0);
  }

  function findCoffeeIndex(coffees: Coffee[], id: string): number {
    return coffees.findIndex((coffee) => coffee.id === id);
  }

  function removeCoffeeFromList(coffees: Coffee[], coffeeIndex: number) {
    coffees.splice(coffeeIndex, 1)
  }

  function updateTotals(coffees: Coffee[], shipping: number) {
    const subtotal = parseFloat(sumCoffeeTotal(coffees).toFixed(2));
    return {
      numberOfCoffeeInCard: getCoffeeCartCounter(coffees),
      subtotal,
      total: parseFloat((subtotal + shipping).toFixed(2))
    }
  }


  switch (action.type) {
    case OrderListActions.ADD_COFFEE:
      return produce(state, (draft) => {
        if (action.payload && action.payload.coffee && action.payload.coffee.quantity > 0) {
          const newCoffee = action.payload.coffee;
          const coffeeIndex = findCoffeeIndex(state.coffees, newCoffee.id);
          if (coffeeIndex > -1) {
            const currentQuantity = draft.coffees[coffeeIndex].quantity;
            draft.coffees[coffeeIndex].quantity = currentQuantity + newCoffee.quantity;
          } else {
            draft.coffees.push(newCoffee);
          }
          const { numberOfCoffeeInCard, subtotal, total } = updateTotals(draft.coffees, draft.shipping);
          draft.numberOfCoffeeInCard = numberOfCoffeeInCard;
          draft.subtotal = subtotal;
          draft.total = total;
        }
      });
    case OrderListActions.UPDATE_COFFEE_QUANTITY: {
      return produce(state, (draft) => {
        if (action.payload && action.payload.id) {
          const coffeeIndex = findCoffeeIndex(state.coffees, action.payload!.id);
          if (coffeeIndex > -1 && (action.payload.quantity || action.payload.quantity === 0)) {
            if (action.payload.quantity === 0) {
              removeCoffeeFromList(draft.coffees, coffeeIndex);
            } else {
              draft.coffees[coffeeIndex].quantity = action.payload.quantity;
            }
            const { numberOfCoffeeInCard, subtotal, total } = updateTotals(draft.coffees, draft.shipping);
            draft.numberOfCoffeeInCard = numberOfCoffeeInCard;
            draft.subtotal = subtotal;
            draft.total = total;
          }
        }
      })
    }
    case OrderListActions.REMOVE_COFFEE: {
      return produce(state, (draft) => {
        if (action.payload && action.payload.id) {
          const coffeeIndex = findCoffeeIndex(state.coffees, action.payload!.id);
          if (coffeeIndex > -1) {
            removeCoffeeFromList(draft.coffees, coffeeIndex);
            const { numberOfCoffeeInCard, subtotal, total } = updateTotals(draft.coffees, draft.shipping);
            draft.numberOfCoffeeInCard = numberOfCoffeeInCard;
            draft.subtotal = subtotal;
            draft.total = total;
          }
        }
      })
    }
    case OrderListActions.UPDATE_ADDRESS: {
      return produce(state, (draft) => {
        if (action.payload && action.payload.addressType) {
          switch (action.payload.addressType) {
            case AddressType.POSTAL_CODE:
              draft.address.postalCode = action.payload.addressValue as string;
              break;
            case AddressType.STREET:
              draft.address.street = action.payload.addressValue as string;
              break;
            case AddressType.ADDRESS2:
              draft.address.address2 = action.payload.addressValue as string;
              break;
            case AddressType.CITY:
              draft.address.city = action.payload.addressValue as string;
              break;
            case AddressType.NUMBER:
              draft.address.number = action.payload.addressValue as string;
              break;
            case AddressType.DISTRICT:
              draft.address.district = action.payload.addressValue as string;
              break;
            case AddressType.STATE:
              draft.address.state = action.payload.addressValue as string;
              break;
            default:
              break;
          }
        }
      })
    }
    case OrderListActions.UPDATE_ORDER_SUMMARY: {
      return produce(state, (draft) => {
        if (action.payload && action.payload.orderSummary) {
          draft.orderSummary = action.payload.orderSummary;
          draft.coffees.splice(0, draft.coffees.length);
          const { numberOfCoffeeInCard, subtotal, total } = updateTotals(draft.coffees, draft.shipping);
          draft.numberOfCoffeeInCard = numberOfCoffeeInCard;
          draft.subtotal = subtotal;
          draft.total = total;
        }
      })
    }

    default:
      return state;
  }
}