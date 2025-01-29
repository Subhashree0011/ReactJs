
import { useState } from 'react';
import './App.css'

function App() {

  const[counter,setcounter] = useState(10);
 
 function addvalue(){
  if(counter<20)
    setcounter(counter+1)

 }

 function removevalue(){
  if(counter>0)
    setcounter(counter-1)
 }
 
   return (
     <>
     <h1>My name is Lakhan</h1>
 
     <button onClick={addvalue}>Add</button>
     <button onClick={removevalue}>Remove</button>
      <p>counter {counter}</p>
     </>
   )
 }
 
export default App
