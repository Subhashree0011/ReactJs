import { useState } from 'react'

import './app.css'

import Card from './Components/Card'

function App() {
  
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    console.log("clicked", counter);
    counter=counter+1;
    setCounter(counter)
  }

  return (
   <>
   <h1 className="bg-blue-800  p-4"  >Coding is important</h1>

    <figure class="md:flex bg-slate-100 rounded-3xl p-8 md:p-0 dark:bg-slate-800 mt-10 ml-4 mr-4">

    <img class="w-24 h-24 md:w-48 md:h-auto  rounded-3xl mx-auto" src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" width="384" height="512"></img>
    
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">

        <blockquote>

          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>

        </blockquote>
{/* 
        <figcaption class="font-medium">

          <div class="text-sky-500 dark:text-sky-400">

            Sarah Dayan

          </div>

          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>

        </figcaption> */}

      </div>
  </figure>



 {/* <h2>Counter value :{counter}</h2>

   <button onClick={addValue}>Add value</button>
   <br/>
   <button>Remove value</button> */}


   {/* <Card username ="Subhashree"/>
   <Card/> */}



   </>
    
  )
}

export default App
