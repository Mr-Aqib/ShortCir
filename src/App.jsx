import React from 'react'
import Useeffect from './Hooks/Useeffect'
import Apifetch from './Api Req/Apifetch'
import ControlledInputs from './Inputs/ControlledInputs'
import { Toaster } from 'react-hot-toast';

import Birthday from './Birthday Reminder/Birthday'
import Event from './Events/Event'
import Us from './Hooks/Us'
import Counter from './Counterapp/Counter'
import ShortCitcuit from './ShortCircuits/ShortCircuit'

const App = () => {
  return (
    <>
    <Toaster/>
    <Event/>
    <Us/>
    <Counter/>
    <ShortCitcuit/> 
    <Birthday/> 
    <Useeffect/> 
    <Apifetch/>
    <ControlledInputs/>
     </>
  )
}

export default App