import React, { useState } from "react";
import {
  Container,
  Header,
  Result,
  Current,
  Buttons,
  Clear,
  Back,
  Sqrt,
  Increase,
  Seven,
  Line,
  Eight,
  Nine,
  Split,
  Four,
  Five,
  Six,
  Minus,
  One,
  Two,
  Three,
  Plus,
  Zero,
  Comma,
  Percent,
  Equals,
} from "./styled";

const errorMessage = "ERROR";

const Calculator = () => {
  const [value, setValue] = useState("0");

  const insertSymbol = (num) => () => {
    if (value === "" || (num !== "," && value === "0")) {
      console.log(num);
      setValue(num);
      return;
    }
    setValue("" + value + num);
  };

  const showResult = () => {
    try {
      const newValue = eval(value);
      setValue(newValue);
    } catch (e) {
      console.log(errorMessage);
      console.log(value, "is not correct expression");
      setValue(errorMessage);
    }
  };

  const backspace = () => {
    if (value === errorMessage) {
      reset();
      return;
    }
    const newValue = value.slice(0, -1);
    if (newValue === "") {
      reset();
      return;
    }
    setValue(newValue);
  };

  const reset = () => {
    setValue("0");
  };

  const sqrt = () => {
    try {
      const getValue = eval(value);
      const newValue = Math.sqrt(getValue);
      setValue(newValue);
    } catch (e) {
      console.log(errorMessage);
      console.log(value, "is not correct expression");
      setValue(errorMessage);
    }
  };

  return (
    <Container>
      <Header />
      <Result>
        <Current>{value}</Current>
      </Result>
      <Buttons>
        <Line>
          <Clear onClick={reset}>c</Clear>
          <Back onClick={backspace}>←</Back>
          <Sqrt onClick={sqrt}>√</Sqrt>
          <Increase onClick={insertSymbol("*")}>x</Increase>
        </Line>
        <Line>
          <Seven onClick={insertSymbol(7)}>7</Seven>
          <Eight onClick={insertSymbol(8)}>8</Eight>
          <Nine onClick={insertSymbol(9)}>9</Nine>
          <Split onClick={insertSymbol("/")}>/</Split>
        </Line>
        <Line>
          <Four onClick={insertSymbol(4)}>4</Four>
          <Five onClick={insertSymbol(5)}>5</Five>
          <Six onClick={insertSymbol(6)}>6</Six>
          <Minus onClick={insertSymbol("-")}>-</Minus>
        </Line>
        <Line>
          <One onClick={insertSymbol(1)}>1</One>
          <Two onClick={insertSymbol(2)}>2</Two>
          <Three onClick={insertSymbol(3)}>3</Three>
          <Plus onClick={insertSymbol("+")}>+</Plus>
        </Line>
        <Line>
          <Zero onClick={insertSymbol(0)}>0</Zero>
          <Comma onClick={insertSymbol(",")}>,</Comma>
          <Percent>%</Percent>
          <Equals onClick={showResult}>=</Equals>
        </Line>
      </Buttons>
    </Container>
  );
};

export default Calculator;
