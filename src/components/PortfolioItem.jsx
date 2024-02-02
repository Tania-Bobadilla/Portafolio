import React from 'react'

const PortfolioItem = ({title, img, stack, link}) => {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
        <img src={img} alt="portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer' />
        <div className='w-full p-4 i justify-center flex flex-col items-center'>
            <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row text-xs md:text-sm'>
                {stack.map(item => (
                    <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                        {item}
                    </span>
                ))}
            </p>
            <a href={link}>
                <button className='text-center px-5 py-2 w-max tezt-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-300 to-pink-500 drop-shadow-md mt-4'>Demo</button>
            </a>
        </div>
    </div>
  )
}

export default PortfolioItem