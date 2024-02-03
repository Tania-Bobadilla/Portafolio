import skillsItems from "../../data/skillsItems";
import SkillsItem from "./SkillsItem";

const Skills = () => {
    return(
        <div className='my-20'>
            <h1 className='text-base md:text-xl mb-10 font-large text-center font-bold'>Tecnologías con las que he trabajado</h1>
            <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center justify-center'>
                {skillsItems.map(project => (
                    <SkillsItem
                        img={project.img}
                        name={project.name}
                    />
                ))}
            </div>
        </div>  
    </div> 
    )
}

export default Skills