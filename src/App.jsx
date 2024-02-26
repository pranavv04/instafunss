import { useState  } from 'react'
import {db } from './config/firebase.js'
import { getDocs , collection , addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
function App() {
  const[count, setCount] = useState(1);
  const counterCollect = collection(db , "counter");

  const increment =async ()=>{
     setCount(e => e+1 )
     try{
      await addDoc(counterCollect,{
        counter : count,
      })

     }
     catch(err){
      console.log(err);
     }

  }


  return (
    <>
    <div className='flex justify-center text-center m-2 flex-col'> 
    <h1 className='text-4xl  m-12 font-extrabold'>Whattup</h1>
    <Link to='/video'>
    <button onClick={increment} className='p-2 w-25 m-12 bg-blue-500 rounded-lg text-white font-bold'>
    Trust Me ? </button></Link>
   
    </div>
   <div/>
    </>
  )
}

export default App
