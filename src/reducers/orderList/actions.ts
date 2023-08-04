import { Coffee, OrderSummary } from "./reducer";

export enum OrderListActions {
  ADD_COFFEE = 'ADD_COFFEE',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  UPDATE_ADDRESS = 'UPDATE_ADDRESS',
  UPDATE_ORDER_SUMMARY = 'UPDATE_ORDER_SUMMARY'
}

export enum AddressType {
  POSTAL_CODE = 'POSTAL_CODE',
  STREET = 'STREET',
  NUMBER = 'NUMBER',
  ADDRESS2 = 'ADDRESS2',
  DISTRICT = 'DISTRICT',
  CITY = 'CITY',
  STATE = 'STATE'
}

export interface OrderListAction {
  type: OrderListActions,
  payload?: {
    coffee?: Coffee
    id?: string
    quantity?: number
    addressType?: AddressType
    addressValue?: string
    orderSummary?: OrderSummary
  }
}

function addCoffeAction(coffee: Coffee): OrderListAction {
  return {
    type: OrderListActions.ADD_COFFEE,
    payload: { coffee }
  }
}

function updateCoffeQuandityAction(id: string, quantity: number): OrderListAction {
  return {
    type: OrderListActions.UPDATE_COFFEE_QUANTITY,
    payload: { id, quantity }
  }
}

function removeCoffeAction(id: string): OrderListAction {
  return {
    type: OrderListActions.REMOVE_COFFEE,
    payload: { id }
  }
}

function updAddressAction(
  addressType: AddressType,
  addressValue: string
): OrderListAction {
  return {
    type: OrderListActions.UPDATE_ADDRESS,
    payload: { addressType, addressValue }
  }
}

function updateOrderSummaryAction(
  orderSummary: OrderSummary
): OrderListAction {
  return {
    type: OrderListActions.UPDATE_ORDER_SUMMARY,
    payload: { orderSummary }
  }
}

export default {
  addCoffeAction,
  updateCoffeQuandityAction,
  removeCoffeAction,
  updAddressAction,
  updateOrderSummaryAction
};