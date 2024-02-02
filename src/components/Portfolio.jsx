import React from 'react';
import portfolio from "../../data/portfolio";
import PortfolioItem from "../components/PortfolioItem"

const Portfolio = () => {
  return (
    <div className='pb-10'>
      <h1 className='text-base md:text-xl mb-5 font-large text-center font-bold'>Proyectos realizados</h1>
      <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center'>
        {portfolio.map(project => (
          <PortfolioItem
            img={project.img}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
     </div>  
    </div> 
    
  )
}

export default Portfolio