import React ,{useEffect, useState} from 'react'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import Ordenes from './Ordenes';
import { Prouductos } from './Prouductos';

//function handleAction(event) {
  //console.log('Child did:', event.target.value);
//}

export const Admin = () => {
  const [data, setData] = useState({})
  
  useEffect(()=> {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'compras')
    getDocs(queryCollection)
            .then(res => setData(res.docs.map(product => ({id:product.id, ...product.data()}))))
},[])

const [ordenes, setOrdenes] = useState('')
function handlechange(e){
  setOrdenes(e.target.value)
}

  return (
    <div className='md:flex bg-gray-100'>
        <aside className=' mx-1 my-1 bg-black rounded-md md:w-1/6 text-white pt-[4rem]'>
        <button className='w-full px-2 pt-3  bg-black ' value='ordenes' onClick={handlechange}>
            Ordenes
        </button>
        <button className='w-full px-2 pt-5 ' value='productos' onClick={handlechange}>
            Clientes
        </button>
        <button className='w-full px-2 pt-5 ' value='productos' onClick={handlechange}>
            Productos
        </button>
        </aside>


        <div className='w-full h-screen md:w-5/6 px-10 pt-[4rem] '>
          {ordenes==='ordenes'?<Ordenes data={data}/>:<Prouductos />}
          

        </div>
        
    </div>
  )
}
