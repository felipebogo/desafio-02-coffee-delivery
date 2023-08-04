import { MapIcon, PayIcon, SuccessContainer, SummaryContainer, TimeIcon } from "./styles";
import motoby from '../../assets/motoboy.svg';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { OrderListContext } from "../../contexts/OrderListContext";

export function Success() {
  const {
    orderSummary
  } = useContext(OrderListContext);
  return (
    <SuccessContainer>
      <div>
        <h2>
          Uhu! Pedido confirmado
        </h2>
        <p>
          Agora é só aguardar que logo o café chegará até você
        </p>
        <SummaryContainer>
          <div>
            <p>
              <MapIcon>
                <MapPin weight="fill" size={16} />
              </MapIcon>
              <span>
                Entrega em <strong>{`${orderSummary.address.street}, ${orderSummary.address.number}
                ${orderSummary.address.address2 && ', ' + orderSummary.address.address2}`}</strong><br />
                {orderSummary.address.district} - {orderSummary.address.city}
              </span>
            </p>
            <p>
              <TimeIcon>
                <Timer weight="fill" size={16} />
              </TimeIcon>
              <span>
                Previsao de entrega<br />
                <strong>{orderSummary.time}</strong>
              </span>
            </p>
            <p>
              <PayIcon>
                <CurrencyDollar weight="fill" size={16} />
              </PayIcon>
              <span>
                Pagamento na entrega <br />
                <strong>{orderSummary.payment}</strong>
              </span>
            </p>
          </div>
        </SummaryContainer>
      </div>
      <img src={motoby} alt="" />
    </SuccessContainer>
  )
}
