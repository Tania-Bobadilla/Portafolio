

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <h1 className='text-base md:text-xl mb-5 mt-8 font-large text-center font-bold'>Contacto</h1>
      <div className='flex justify-center items-center'>
        <form action="https://getform.io/slug" method='POST' className='flex flex-col w-full md:w-7/12' >
            <input type="text" name='name' placeholder='Nombre' className='p-2 bg-transparent broader-2 rounded-md focus:outline-none'/>
            <input type="text" name='email' placeholder='E-mail' className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
            <textarea name="message" placeholder='Mensaje' rows="10" className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'></textarea>     
            <button type='button' className='text-center inline-block px-8 py-3 w-max tezt-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-pink-600 drop-shadow-md items-center'>Contáctame</button>
        </form>
      </div>
    </div>
  )
}

export default Contact