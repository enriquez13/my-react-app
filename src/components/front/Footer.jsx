import { AiOutlineWhatsApp } from "react-icons/ai"
import { NavLink } from "react-router-dom";
const Footer=()=>{

    return (
        <footer className="px-6 pb-[5rem] bg-black sm:p-6 w-full ">

            <div className="flex py-8 space-x-6 justify-center ">
                <a href="https://www.facebook.com/Zorobabel-106610321504559 " 
                    className="text-[#5655C9] hover:text-gray-500 dark:hover:text-white "
                    target="_blank">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"  ></path></svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="https://www.instagram.com/zorobabel_co/"
                    className="text-[#DE79A5] hover:text-gray-900 dark:hover:text-white"
                    target="_blank">
                    <svg className="w- h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"  ></path></svg>
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="https://wa.me/573127296362"
                    className="text-[#96DF82] hover:text-gray-500 dark:hover:text-white"
                    target="_blank">
                    <span fill="currentColor" aria-hidden="true" className="text-2xl "><AiOutlineWhatsApp /></span>
                    <span className="sr-only">Whastapp page</span>
                </a>
            </div>

            <div className="grid sm:gap-6 sm:grid-cols-3 ">

                <div className="sm:grid sm:justify-items-center">
                    <section className="text-gray-400">
                        <h2 className="w-1/2 mt-4 text-left text-sm font-semibold text-gray-200 uppercase ">Información</h2>
                        <div className="my-2">
                        <NavLink to='/preguntas' className='my-2 mb-2 hover:underline'>
                            <h3  className="mb-2 hover:underline">Preguntas frecuentes</h3>
                        </NavLink>
                        <NavLink to='/nosotros' className='my-2 mb-2 hover:underline'>
                            <h3  className="mb-2 hover:underline">Nosotros</h3>
                        </NavLink>
                        <NavLink to='/contactanos' className='my-2 mb-2 hover:underline'>
                        <h3  className="mb-2 hover:underline">Contáctanos</h3>
                        </NavLink>
                        <div className='my-2 mb-2 '>
                            <h3  className="mb-2 ">Cl 6 # 10-06 Centro, Popayán</h3>
                        </div>
                        </div>
                    </section>
                </div>

                <div className="sm:grid sm:justify-items-center">
                <section className="text-gray-400">
                    <h2 className="mt-4 text-sm font-semibold text-gray-200 uppercase ">Envíos y devoluciones</h2>
                        <div className="my-2">  
                        <NavLink to='/envios' className='hover:underline w-full'>
                            <h3 className="mb-2 hover:underline">Envíos</h3>
                        </NavLink>
                        <NavLink to='/proceso' className='my-2 hover:underline w-full'>
                            <h3 className="mb-2 hover:underline">proceso de devolución</h3>
                        </NavLink>
                       
                        <NavLink to='/politicas' className='my-2 hover:underline'>
                            <h3 className="mb-2 hover:underline">Políticas</h3>
                        </NavLink>
                        </div>
                    </section>
                    </div>
                    <div className="sm:grid sm:justify-items-center">
                    <section className="text-gray-400 ">
                        <h2 className="mt-4 text-sm font-semibold text-gray-200 uppercase ">Métodos de pago</h2>
                            <p className='my-2'>
                               Transferencia bancolombia
                            </p>
                            <p className='my-2'>
                                Pago nequi
                            </p>
                            <p className='my-2'>
                                Pago daviplata
                            </p>
                            <p className='my-2'>
                                PSE y tarjeta de crédito
                            </p>
                            <p className='my-2'>
                                Servicio contraentrega
                            </p>
                        </section>
                    </div>
                

            </div>

            <hr className="my-6 border-gray-600 sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between md:mb-10">
                <span className="text-sm text-gray-400 sm:text-center ">© 2023 ZOROBABEL. Todos los derechos reservados.
                </span>
                
            </div>
        </footer>
    )
}
export default Footer;