import { CoffeContainer, CoffeList, CoffeeListContainer, HomeContainer, IntroContainer, IntroListContainer, IntroTextContainer } from "./styles";
import coffeeIntro from '../../assets/coffee-intro.svg';
import { ShoppingCart, ShoppingCartSimple } from "phosphor-react";

import expressoTradicional from '../../assets/coffee/expresso-tradicional.svg';
import expressoAmericano from '../../assets/coffee/expresso-americano.svg';
import expressoCremoso from '../../assets/coffee/expresso-cremoso.svg';
import expressoGelado from '../../assets/coffee/expresso-gelado.svg';
import cafComLeite from '../../assets/coffee/cafe-com-leite.svg';
import latte from '../../assets/coffee/latte.svg';
import capuccino from '../../assets/coffee/capuccino.svg';
import macchiato from '../../assets/coffee/macchiato.svg';
import moccacino from '../../assets/coffee/mocaccino.svg';
import chocolateQuente from '../../assets/coffee/chocolate-quente.svg';
import cubano from '../../assets/coffee/cubano.svg';
import havaiano from '../../assets/coffee/havaiano.svg';
import arabe from '../../assets/coffee/arabe.svg';
import irlandes from '../../assets/coffee/irlandes.svg';
import { InputNumber } from "../../components/InputNumber";
import { useContext, useState } from "react";
import { OrderListContext } from "../../contexts/OrderListContext";
import { Coffee } from "../../reducers/orderList/reducer";
import { produce } from "immer";

export function Home() {
  const { addCoffee } = useContext(OrderListContext);
  const [coffeeList, setCofeeList] = useState<Coffee[]>(
    [
      {
        id: '1',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 6.99,
        typeList: ['Tradicional'],
        urlImg: expressoTradicional,
        quantity: 0
      },
      {
        id: '2',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 5.99,
        typeList: ['Tradicional'],
        urlImg: expressoAmericano,
        quantity: 0
      },
      {
        id: '3',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 7.99,
        typeList: ['Tradicional'],
        urlImg: expressoCremoso,
        quantity: 0
      },
      {
        id: '4',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 8.99,
        typeList: ['Tradicional', 'Gelado'],
        urlImg: expressoGelado,
        quantity: 0
      },
      {
        id: '5',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 8.59,
        typeList: ['Tradicional', 'Com Leite'],
        urlImg: cafComLeite,
        quantity: 0
      },
      {
        id: '6',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.59,
        typeList: ['Tradicional', 'Com Leite'],
        urlImg: latte,
        quantity: 0
      },
      {
        id: '7',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 11.49,
        typeList: ['Tradicional', 'Com Leite'],
        urlImg: capuccino,
        quantity: 0
      },
      {
        id: '8',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 12.99,
        typeList: ['Tradicional', 'Com Leite'],
        urlImg: macchiato,
        quantity: 0
      },
      {
        id: '9',
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 11.99,
        typeList: ['Tradicional', 'Com Leite'],
        urlImg: moccacino,
        quantity: 0
      },
      {
        id: '10',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 11.99,
        typeList: ['Especial', 'Com Leite'],
        urlImg: chocolateQuente,
        quantity: 0
      },
      {
        id: '11',
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 13.99,
        typeList: ['Especial', 'Alcoólico', 'Gelado'],
        urlImg: cubano,
        quantity: 0
      },
      {
        id: '12',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 14.99,
        typeList: ['Especial'],
        urlImg: havaiano,
        quantity: 0
      },
      {
        id: '13',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 19.99,
        typeList: ['Especial'],
        urlImg: arabe,
        quantity: 0
      },
      {
        id: '14',
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 17.99,
        typeList: ['Especial', 'Alcoólico'],
        urlImg: irlandes,
        quantity: 0
      },
    ]);

  function handleAddCoffee(coffee: Coffee) {
    addCoffee(coffee);
    setCoffeeQuantity(coffee.id, 0);
  }

  function setCoffeeQuantity(id: string, quantity: number) {
    setCofeeList((state) => {
      const coffeeIndex = state.findIndex(coffee => coffee.id === id);
      if (coffeeIndex > -1) {
        const novoEstado = produce(state, draft => {
          draft[coffeeIndex].quantity = quantity
        })
        return novoEstado
      }
      return state;
    })
  }

  function handleUpdateCofeeQuantity(id: string, quantity: number) {
    setCoffeeQuantity(id, quantity);
  }

  return (
    <HomeContainer>
      <IntroContainer>
        <IntroTextContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <IntroListContainer>
            <p><ShoppingCart size={32} weight="fill" />Compra simples e segura<span></span></p>
            <p><ShoppingCart size={32} weight="fill" />Embalagem mantém o café intacto<span></span></p>
            <p><ShoppingCart size={32} weight="fill" />Entrega rápida e rastreada<span></span></p>
            <p><ShoppingCart size={32} weight="fill" />O café chega fresquinho até você<span></span></p>
          </IntroListContainer>
        </IntroTextContainer>
        <img src={coffeeIntro} alt="" />
      </IntroContainer>
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeList>
          {coffeeList.map(coffee => {
            return (
              <CoffeContainer key={coffee.id}>
                <img src={coffee.urlImg} alt="" />
                <ul>
                  {coffee.typeList.map((type) => (<li key={type}>{type}</li>))}
                </ul>
                <h3>
                  {coffee.name}
                </h3>
                <p>{coffee.description}</p>
                <footer>
                  <span>{coffee.price}</span>
                  <div>
                    <InputNumber value={coffee.quantity || 0} onChangeValue={(quantity) => { handleUpdateCofeeQuantity(coffee.id, quantity) }} />
                    <button type="button" onClick={() => { handleAddCoffee(coffee) }}><ShoppingCartSimple size={22} weight="fill" /></button>
                  </div>
                </footer>

              </CoffeContainer>
            )
          })}
        </CoffeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
