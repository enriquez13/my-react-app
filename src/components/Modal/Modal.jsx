import React, { Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai";
import { DataCategorias } from '../front/DataCategorias';
import ModalaTallaColor from './ModalaTallaColor';


const descuento = 0.6
const precioLimite = 149900

export const Modal = (props) => {

    const { addProduct, closeModal, cart, removeProduct, totalPrice, totalProducts, allProducts } = props
    //Filtrar productos de mayor a menor valor en el carrito
    const maxValor = cart.reduce((max, producto) => (producto.valor > max ? producto.valor : max), 0);
    const filteredProducts = allProducts.filter(producto => producto.valor <= maxValor);
    //carrito producots ordenados de mayor a menor valor
    const productosOrdenados = cart.sort((a, b) => b.valor - a.valor);

    const [selectedSize, setSelectedSize] = useState({});
    const [selectedColor, setSelectedColor] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [selectedImagen, setSelectedImagen] = useState("")
    const [goToCart, setGoToCart] = useState(false)
    //generar alerta si no se ha seleccionado color
    const [productId, setProductId] = useState("")

    const onAdd = (quantity, talla, color, ide, img) => {
        setGoToCart(true)
        addProduct(selectedProduct, quantity, talla, color, ide, img)
    }
    //Reset de los atributos
    
    const resetSelections = () => {
        setSelectedSize(null)
        setSelectedProduct(null)
        setSelectedColor(null)
        setProductId(null)
        setSelectedImagen(null)
    }
 

    const handleSizeClick = (size, producto) => {
        setSelectedSize(size);
        setSelectedProduct(producto);
        setIsModalOpenTallaColor(true)

    };
    const handleColorClick = (color) => {
        setSelectedColor(color)
        setSelectedImagen(color.imagen)
        //setProductId("")
    }
    function agregar(Id) {
        setProductId(Id)
        if (selectedColor) {
            onAdd(1, selectedSize.size, selectedColor.color, selectedColor.idepro, selectedColor.imagen)
            alert("Agregado con éxito")
            resetSelections()
            handleCloseModalTallaColor()
        }
    }

    //ModalTallaColor
    const [isModalOpenTallaColor, setIsModalOpenTallaColor] = useState(false);
    function handleOpenModalTallaColor(producto) {
        setIsModalOpenTallaColor(true);
        setSelectedProduct(producto)
    }
    function handleCloseModalTallaColor() {
        setSelectedSize(null)
        setIsModalOpenTallaColor(false);
        resetSelections()
    }

    return (
        <div className=" fixed w-full z-[20]  right-0 inset-y-0 pt-0 md:mt-[10rem]  sm:flex sm:items-center sm:justify-center ">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
                <div className="w-full absolute inset-0 bg-black bg-opacity-80  "></div>
            </div>
            
            <div className='md:w-[40%] relative h-[120vh] bg-gray-100 '>
                <div className="h-[90vh] max-h-[90vh] md:max-h-[88vh] overflow-y-scroll  rounded-lg overflow-hidden shadow-xl transform transition-all  ">
                    <div className="pb-[8rem] sm:p-6 sm:pb-4">
                        <div className="h-[70vh] text-center sm:mt-5 mx-2 relative">
                            <h1 className="text-xl font-bold leading-6  text-gray-900 my-6 ">
                                {filteredProducts.length > 0 ?
                                    "Recién agregados al carrito" : "No tiene productos Agregados"
                                }
                            </h1>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute right-1 md:right-[0] content-center flex items-center
                            top-[-12px] text-black md:transform md:hover:text-gray-700 cursor-pointer 
                            bg-black bg-opacity-5 rounded-full p-1 text-3xl"
                            >
                                <AiOutlineClose />
                            </button>


                            <div className="  "> {// aquí overflow-y-scroll
                            }
                                {cart?.map((product, index) => (
                                    <Fragment key={product.id}> 
                                        <div className=" grid grid-cols-6 bg-white h-[7rem] w-full justify-items-center content-center" key={index}  >
                                            <div className='col-span-2  w-[6rem] h-[6rem]  relative'>
                                                <img src={cart[index].img} className="object-cover w-full h-full" 
                                                alt='Imagen productos carrito de compras' />
                                                <span className='bg-blue-500 absolute top-[-4px] right-[-7px] 
                                 text-white text-sm rounded-full px-[0.4rem]'>
                                                    {totalProducts() ? product.quantity : ''}
                                                </span>

                                            </div>
                                            <div className="col-span-3 h-full d-flex align-items-center py-5 relative">
                                                <div>
                                                    <p className="text-sm leading-5 text-gray-500 font-bold ">
                                                        {product.category}{" "}{product.nombre}
                                                    </p>
                                                    <p className="text-sm leading-5 text-gray-500 ">
                                                        Talla {" "}{product.talla}{" "} Color{" "}{product.color}
                                                    </p>


                                                    <p className="text-sm leading-5  ">
                                                        <span style={{ textDecorationColor: 'black' }} className={`${cart.length > 1 && index > 0 ? 'line-through text-gray-500' : 'text-gray-700'} font-bold`}>
                                                            {cart[index].valor}
                                                        </span>
                                                        <span className='text-blue-500'> {index === 0 ? "" : index === 1 ? "20%" : "40%"}</span>
                                                        {index > 0 ? (
                                                            <span className='text-gray-700 font-bold pl-2'>
                                                                {index === 0 ? cart[index].valor : index === 1 ? cart[index].valor * 0.8 : cart[index].valor * 0.6}
                                                            </span>
                                                        ) : " "}
                                                    </p>
                                                </div>
                                                <div className="absolute top-[50%] right-[-3rem]">
                                                    <button onClick={() => removeProduct(product.ide)}
                                                        className="rounded-full h-5 w-5 flex items-center justify-center text-gray-600 ">
                                                        <span className="text-sm"><AiFillDelete /></span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <hr />

                                    </Fragment>))}
                            </div>
                            <div className='w-full max-w-full overflow-x-hidden grid   text-black justify-center items-center
                            my-5 text-xl font-semibold'>

                               <h2> {cart.length === 0 ? "Buscar productos" : cart.length === 1 ? "Obten 20% en el segundo producto y 40% en el tercero" : cart.length >= 2 ? "Obten 40% en el siguiente producto" : null}</h2>

                            </div>

                            {cart.length === 0 ?
                                <>

                                    <div className="w-full max-w-full overflow-x-hidden grid   text-sky-700 justify-center items-center">
                                        {DataCategorias.map((category, index) => (
                                            <Fragment key={index}> 
                                            
                                            <NavLink to={`/categoria/${category.url}`}  className=" w-full relative h-[15rem] mt-2">
                                                <img className="object-cover w-full h-full md:transform md:duration-200 md:hover:scale-105" 
                                                src={category.src} alt={"Imagen categoria " + category.nombre}/>
                                                <div className="absolute grid bottom-[20%] translate-y-[50%] w-full text-sm px-4 ">
                                                    <h3 className="place-self-center text-gray-200  text-2xl my-4 font-semibold" >{category.nombre}</h3>

                                                </div>
                                            </NavLink>
                                            </Fragment>
                                        )
                                        )}

                                    </div>
                                </> :



                                <div className="pb-[0.2rem]">
                                    {filteredProducts.map((producto, index) => (
                                        <div key={producto.id} className=" bg-white my-4 mx-4 border border-gray-300 px-4 py-1 grid grid-cols-8 h-[7rem] justify-items-center content-center">
                                            <div className="container h-[5rem] w-[5rem] col-span-2">
                                                <img className="object-cover w-full h-full " alt='Imagen de referenica del producto'
                                                onClick={()=>handleOpenModalTallaColor(producto)}
                                                    src={selectedProduct&&selectedProduct.id === producto.id && selectedImagen ? selectedImagen : producto.sizes[0].colors[0].imagen}
                                                />
                                            </div>

                                            <div className="col-span-2">
                                                <h3 className="text-xs font-bold text-black">{producto.nombre}</h3>
                                                <aside className="text-sm leading-5 text-gray-500 ">
                                                    <h4 className="font-bold text-black text-sm">{cart.length === 1 ? producto.valor * 0.8 : producto.valor * 0.6}</h4>
                                                    <h4 className={`${" line-through text-gray-500"} font-bold text-sm`}>{producto.valor}</h4>
                                                </aside>
                                            </div>
                                            <div className='col-span-4 grid  justify-items-center content-center'>
                                                <div className='grid grid-cols-4 gap-4 mx-2 '>


                                                   
                                                        {producto.sizes.map((size, index) => (
                                                    <Fragment key={index}>

                                                            <button  className={`${selectedSize&&size.size === selectedSize.size && selectedProduct.id === producto.id
                                                                ? "text-[0.7rem] border bg-black text-gray-100 w-5 h-5 font-bold transform duration-500 scale-110 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                                : "text-[0.7rem] w-5 h-5 border border-gray-200 transform duration-500 md:hover:scale-110 md:hover:border-gray-500 rounded-lg"
                                                                }`}
                                                                onClick={() => handleSizeClick(size, producto)}>
                                                                {size.size}
                                                            </button>
                                                            
                                        
                                                    </Fragment>  ))}


                                                </div>
                                                { productId === producto.id &&  (
                                            <div className='bg-red-100 text-red-600 rounded-lg px-2 mt-1 text-xs'>
                                               Seleccione talla y color
                                            </div>
                                            )}
                                                <button onClick={() => agregar(producto.id)}
                                                    className='bg-black text-white border rounded-lg px-3 py-1 my-3 text-sm'
                                                >Agregar</button>
                                            </div>

                                        </div>


                                    ))}
                                </div>}
                        </div>

                    </div>
                </div>

                <div className="h-[11vh] md:w-[40%] bg-gray-50  fixed bottom-0 w-full shadow-md grid justify-items-center content-center">
                    <h3 className="text-sm leading-5 text-gray-500 w-full text-center pt-1">
                        <span className='font-bold text-black'>Total: </span> <span className={`${'text-black font-bold'}`}>
                            ${totalPrice()}</span>
                    </h3>

                    <div className='px-2 pb-2  pt-1 sm:px-6 w-full gap-2 flex'>
                        {cart.length ?
                            <div className=" w-1/2">
                                <NavLink to='/pay'>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent  py-2 
                            bg-black text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none 
                            focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                                    >
                                        Terminar compra
                                    </button></NavLink>
                            </div>

                            : ""}
                        <div className={`${cart.length > 0 ? "w-1/2" : "w-full "}`}>
                            <button onClick={closeModal}
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent  py-2 
                            bg-black text-sm leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none 
                            focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-1000 sm:text-sm sm:leading-5"
                            >
                                Ver más productos
                            </button>
                        </div>
                        {isModalOpenTallaColor && <ModalaTallaColor  onClose={handleCloseModalTallaColor}  
                                        handleSizeClick={handleSizeClick} handleColorClick={handleColorClick} producto={selectedProduct} 
                                        selectedSize={selectedSize} selectedColor={selectedColor} agregar={agregar} selectedImagen={selectedImagen}
                                        resetSelections={resetSelections}/>}

                    </div>
                </div>
            </div>
        </div>
    )
}
