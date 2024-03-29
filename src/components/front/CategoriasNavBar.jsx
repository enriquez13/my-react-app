import React from 'react'
import { NavLink } from 'react-router-dom';
import { DataCategorias} from "./DataCategorias";

export const CategoriasNavBar = ({openNavBar}) => {
  return (
    <>
    {DataCategorias && DataCategorias.map((categorias,index)=>(
        <div className=" grid items-center justify-center md:h-[3rem]" key={index}>
      <NavLink key={index} to={`/categoria/${categorias.url}`} 
        className="mx-10 md:mx-0 grid grid-cols-3 gap-4 cursor-pointer 
        text-xl md:my-0 py-2 md:py-0 text-gray-400  hover:text-gray-800 duration-500" 
        onClick={() => openNavBar()}>
      <div className="md:hidden grid-row-span-2">
        <img src={categorias.src} className="w-[6rem] h-[6rem] object-cover" alt={'categoria '+categorias.nombre}/>
      </div>
      <div className="col-span-2 md:col-span-3 md:h-[3rem]  grid items-center px-4 md:mx-0 ">
        <h3 className=" uppercase text-sm font-semibold ">{categorias.nombre}</h3>
        <h3 className="md:hidden text-sm text-gray-300 font-semibold">{categorias.detalle}</h3>
      </div>
    </NavLink>
    </div>
      ))}
      </>
  )
}
