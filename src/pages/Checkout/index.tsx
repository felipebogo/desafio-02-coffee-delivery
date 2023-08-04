import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from 'phosphor-react';
import {
  AddressCardContainer,
  AddressContainer,
  CheckoutContainer,
  CoffeeCard,
  CoffeeCardContainer,
  CoffeeItem,
  CoffeeList,
  FormContainer,
  InputText,
  PaymentContainer,
  TotalContainer
} from "./styles";
import { InputNumber } from '../../components/InputNumber';
import { FormEvent, useContext } from 'react';
import { OrderListContext } from '../../contexts/OrderListContext';
import { AddressType } from '../../reducers/orderList/actions';
import { useNavigate } from 'react-router-dom';

const PaymentType = {
  CC: 'Cartão de crédito',
  CD: 'Cartão de débito',
  DI: 'Dinheiro',
}

export function Checkout() {
  const {
    coffees,
    subtotal,
    shipping,
    total,
    updateCoffeeQuantity,
    removeCoffee,
    address,
    updateAddress,
    updateOrderSummary,
  } = useContext(OrderListContext);

  const navigate = useNavigate();

  function handleOnChangeInput(addressType: AddressType, addressValue: string) {
    updateAddress(addressType, addressValue);
  }

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (subtotal > 0) {
      const form = event.target as HTMLFormElement;
      const newOrderSummary = {
        address,
        time: '20 min - 30 min',
        payment: PaymentType[form.paymentType.value as keyof typeof PaymentType]
      };
      updateOrderSummary(newOrderSummary);
      navigate('/success');
    }
  }

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmitForm}>
        <AddressCardContainer>
          <h2>Complete o seu pedido</h2>
          <AddressContainer>
            <div>
              <h3><MapPinLine size={22} /><span>Endereço de Entrega</span></h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <FormContainer>
              <InputText
                name="postalCode"
                placeholder='CEP'
                required
                $flexType="full"
                value={address.postalCode}
                onChange={(ev) => handleOnChangeInput(AddressType.POSTAL_CODE, ev.target.value)}
              />
              <InputText
                name="street"
                $flexType="fill"
                placeholder='Rua'
                required
                value={address.street}
                onChange={(ev) => handleOnChangeInput(AddressType.STREET, ev.target.value)}
              />
              <InputText
                name="number"
                placeholder='Número'
                required
                value={address.number}
                onChange={(ev) => handleOnChangeInput(AddressType.NUMBER, ev.target.value)}
              />
              <InputText
                name="Address2"
                $flexType='large'
                placeholder='Complemento'
                value={address.address2}
                onChange={(ev) => handleOnChangeInput(AddressType.ADDRESS2, ev.target.value)}
              />
              <InputText
                name="district"
                placeholder='Bairro'
                required
                value={address.district}
                onChange={(ev) => handleOnChangeInput(AddressType.DISTRICT, ev.target.value)}
              />
              <InputText
                name="city"
                placeholder='Cidade'
                required
                value={address.city}
                onChange={(ev) => handleOnChangeInput(AddressType.CITY, ev.target.value)}
              />
              <InputText
                name="state"
                $flexType='min'
                placeholder='UF'
                required
                value={address.state}
                onChange={(ev) => handleOnChangeInput(AddressType.STATE, ev.target.value)}
              />
            </FormContainer>
          </AddressContainer>
          <PaymentContainer>
            <h3><CurrencyDollar size={22} /> Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <div>
              <input type="radio" name="paymentType" id="radioCC" value='CC' required />
              <label htmlFor="radioCC"><CreditCard size={16} />CARTAO DE CRÉDITO</label>
              <input type="radio" name="paymentType" id="radioCD" value='CD' />
              <label htmlFor="radioCD"><Bank size={16} />CARTAO DE DÉBITO</label>
              <input type="radio" name="paymentType" id="radioDI" value='DI' />
              <label htmlFor="radioDI"><Money size={16} />DINHEIRO</label>
            </div>
          </PaymentContainer>
        </AddressCardContainer>
        <CoffeeCardContainer>
          <h2>Cafés selecionados</h2>
          <CoffeeCard>
            <CoffeeList>
              {coffees.map(coffee => {
                return (
                  <CoffeeItem key={coffee.id}>
                    <div>
                      <img src={coffee.urlImg} alt="" />
                      <div>
                        <span>{coffee.name}</span>
                        <div>
                          <InputNumber value={coffee.quantity} onChangeValue={(quantity) => { updateCoffeeQuantity(coffee.id, quantity) }} />
                          <button onClick={() => { removeCoffee(coffee.id) }}><Trash size={16} />Remover</button>
                        </div>
                      </div>
                    </div>
                    <span>RS {coffee.price}</span>
                  </CoffeeItem>
                )
              })}
            </CoffeeList>
            <TotalContainer>
              <div>
                <span>Total de itens</span><span>R$ {subtotal}</span>
              </div>
              <div>
                <span>Entrega</span><span>R$ {shipping}</span>
              </div>
              <div>
                <span>Total</span><span>R$ {total}</span>
              </div>
              <button>CONFIRMAR PEDIDO</button>
            </TotalContainer>
          </CoffeeCard>
        </CoffeeCardContainer>
      </form>
    </CheckoutContainer>
  )
}
