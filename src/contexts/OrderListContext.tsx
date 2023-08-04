import { ReactNode, createContext, useEffect, useReducer } from "react";
import coffeActions, { AddressType } from '../reducers/orderList/actions'
import { Address, Coffee, OrderListReducer, OrderListState, OrderSummary } from "../reducers/orderList/reducer";

interface OrderListContextType {
  numberOfCoffeeInCard: number
  coffees: Coffee[]
  subtotal: number
  shipping: number
  total: number
  address: Address
  orderSummary: OrderSummary
  addCoffee: (coffe: Coffee) => void
  removeCoffee: (id: string) => void
  updateCoffeeQuantity: (id: string, quandity: number) => void
  updateAddress: (addressType: AddressType, addressValue: string) => void
  updateOrderSummary: (orderSummary: OrderSummary) => void

}

export const OrderListContext = createContext({} as OrderListContextType);

interface OrderListContextProviderProps {
  children: ReactNode
}

export function OrderListContextProvider({ children }: OrderListContextProviderProps) {
  const LOCAL_STORAGE = '@coffee-delivery:order-list-state-1.0.0';
  const [orderListState, dispatch] = useReducer(
    OrderListReducer,
    {
      coffees: [],
      numberOfCoffeeInCard: 0,
      address: {
        postalCode: '',
        street: '',
        number: '',
        address2: '',
        district: '',
        city: '',
        state: '',
      },
      subtotal: 0,
      shipping: 3.95,
      total: 0,
      orderSummary: {
        address: {} as Address,
        time: '',
        payment: ''
      },
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE)
      if (storedStateAsJSON) {
        const parsedData = JSON.parse(storedStateAsJSON) as OrderListState;
        return parsedData;
      }
      return initialState
    },
  );

  const {
    numberOfCoffeeInCard,
    coffees,
    address,
    subtotal,
    total,
    shipping,
    orderSummary } = orderListState;

  function addCoffee(coffee: Coffee) {
    dispatch(coffeActions.addCoffeAction(coffee))
  }

  function updateCoffeeQuantity(id: string, quandity: number) {
    dispatch(coffeActions.updateCoffeQuandityAction(id, quandity));
  }

  function removeCoffee(id: string) {
    dispatch(coffeActions.removeCoffeAction(id));
  }

  function updateAddress(addressType: AddressType, addressValue: string) {
    dispatch(coffeActions.updAddressAction(addressType, addressValue));
  }

  function updateOrderSummary(orderSummary: OrderSummary) {
    dispatch(coffeActions.updateOrderSummaryAction(orderSummary));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(orderListState)
    localStorage.setItem(LOCAL_STORAGE, stateJSON)
  }, [orderListState])




  return (
    <OrderListContext.Provider
      value={{
        numberOfCoffeeInCard,
        coffees,
        subtotal,
        total,
        shipping,
        address,
        orderSummary,
        addCoffee,
        updateCoffeeQuantity,
        removeCoffee,
        updateAddress,
        updateOrderSummary
      }}
    >
      {children}
    </OrderListContext.Provider>
  )
}