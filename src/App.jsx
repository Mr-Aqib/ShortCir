import React from "react";
import Useeffect from "./Hooks/Useeffect";
import Apifetch from "./Api Req/Apifetch";
import ControlledInputs from "./Inputs/ControlledInputs";
import { Toaster } from "react-hot-toast";

import Birthday from "./Birthday Reminder/Birthday";
import Event from "./Events/Event";
import Us from "./Hooks/Us";
import Counter from "./Counterapp/Counter";
import ShortCitcuit from "./ShortCircuits/ShortCircuit";
import Todo from "./TodoList/Todo";
import TextGenerator from "./TextGenerator/TextGenerator";
import ColorGenerator from "./Colorgenerator/ColorGenerator";
import Accordians from "./Accordians/Accordians";
import Productmain from "./ProductAPI/Productmain";
import Form from "./Form/Form";
import UseRef from "./Hooks/UseRef";
import MenuUseRef from "./Hooks/MenuUseRef";

const App = () => {
  return (
    <>
      {
        <Toaster />
        /*<Event/>
    <Us/>
    <Counter/>
    <ShortCitcuit/> 
    <Birthday/> 
    <Useeffect/> 
    <Apifetch/>
    <ControlledInputs/> */
      }
      {/* <Todo/> */}
      {/* <TextGenerator/> */}
      {/* <ColorGenerator/> */}
      {/* <Accordians /> */}
      {/* <Productmain /> */}
      {/* <Form /> */}
      {/* <UseRef /> */}
      <MenuUseRef />
    </>
  );
};

export default App;
