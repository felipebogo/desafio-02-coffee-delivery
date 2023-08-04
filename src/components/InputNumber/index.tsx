import { Minus, Plus } from "phosphor-react";
import { InputNumberContainer } from "./styles";
import { ChangeEvent } from "react";

interface InputNumberProps {
  value: number
  onChangeValue: (newValue: number) => void
}

export function InputNumber({ value, onChangeValue }: InputNumberProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    onChangeValue(parseInt(event.target.value));
  }

  function handleClickPlus() {
    onChangeValue(value + 1);
  }

  function handleClickMinus() {
    onChangeValue(Math.max(value - 1, 0));
  }

  return (
    <InputNumberContainer>
      <button type="button" onClick={handleClickMinus} ><Minus size={14} weight="bold" /></button>
      <input type="number" name="qtd" id="" min={0} step={1} placeholder="0" value={value} onChange={handleInputChange} />
      <button type="button" onClick={handleClickPlus} ><Plus size={14} weight="bold" /></button>
    </InputNumberContainer>
  );
}